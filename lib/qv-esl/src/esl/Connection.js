'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true, get: function() {
      return m[k];
    },
  });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
  Object.defineProperty(o, 'default', { enumerable: true, value: v });
}) : function(o, v) {
  o['default'] = v;
});
var __importStar = (this && this.__importStar) || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.Connection = exports.ConnectionEvent = exports.ConnectionType = void 0;
const net = __importStar(require('net'));
const uuid = __importStar(require('uuid'));
const eventemitter2_1 = require('eventemitter2');
const Event_1 = require('./Event');
const Parser_1 = require('./Parser');
const utils_1 = require('../utils');
const logger_1 = require('../logger');
var ConnectionType;
(function(ConnectionType) {
  ConnectionType[ConnectionType['Outbound'] = 0] = 'Outbound';
  ConnectionType[ConnectionType['Inbound'] = 1] = 'Inbound';
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
var ConnectionEvent;
(function(ConnectionEvent) {
  ConnectionEvent['AuthSuccess'] = 'esl::event::auth::success';
  ConnectionEvent['AuthFail'] = 'esl::event::auth::fail';
  ConnectionEvent['Connect'] = 'esl::connect';
  ConnectionEvent['ChannelDataPrefix'] = 'esl::event::CHANNEL_DATA';
  ConnectionEvent['End'] = 'esl::end';
  ConnectionEvent['Error'] = 'error';
  ConnectionEvent['Ready'] = 'esl::ready';
})(ConnectionEvent = exports.ConnectionEvent || (exports.ConnectionEvent = {}));

class Connection extends eventemitter2_1.EventEmitter2 {
  constructor(socket, type, readyCallback) {
    super({
      wildcard: true,
      delimiter: '::',
      maxListeners: 25,
    });
    this.execAsync = false;
    this.execLock = false;
    this._authed = false;
    this._connecting = true;
    this._usingFilters = false;
    this._channelData = null;
    this._cmdCallbackQueue = [];
    this._apiCallbackQueue = [];
    this.type = type;
    this._socket = socket;
    this._reqEvents = [ 'BACKGROUND_JOB', 'CHANNEL_EXECUTE_COMPLETE' ];
    this._parser = null;
    if (readyCallback)
      this.once(ConnectionEvent.Ready, readyCallback);
    if (type == ConnectionType.Inbound) {
      if (socket.connecting)
        socket.on('connect', () => this._onConnect());
      else
        this._onConnect();
    } else {
      this._onConnect();
      this.sendRecv('connect', () => {
        this.subscribe(this._reqEvents, () => {
          this.emit(ConnectionEvent.Ready);
        });
      });
    }
    socket.on('error', (err) => {
      this.emit(ConnectionEvent.Error, err);
    });
    socket.on('end', () => {
      this.emit(ConnectionEvent.End);
    });
    this.on('esl::event::logdata', function(event) {
      logger_1.logger.log(event);
    });
    this.on('esl::event::command::reply', (event) => {
      if (this._cmdCallbackQueue.length === 0)
        return;
      const fn = this._cmdCallbackQueue.shift();
      if (fn && typeof fn === 'function')
        fn.call(this, event);
    });
    this.on('esl::event::api::response', (event) => {
      if (this._apiCallbackQueue.length === 0)
        return;
      const fn = this._apiCallbackQueue.shift();
      if (fn && typeof fn === 'function')
        fn.call(this, event);
    });
  }

  get authed() {
    return this._authed;
  }

  get connecting() {
    return this._connecting;
  }

  get socket() {
    return this._socket;
  }

  static createInbound(optionsOrSocket, password, readyCallback) {
    const socket = optionsOrSocket instanceof net.Socket ? optionsOrSocket : net.connect(optionsOrSocket);
    const conn = new Connection(socket, ConnectionType.Inbound, readyCallback);
    conn.on('esl::event::auth::request', function() {
      conn.auth(password);
    });
    return conn;
  }

  static createOutbound(socket, readyCallback) {
    return new Connection(socket, ConnectionType.Outbound, readyCallback);
  }

  socketDescriptor() {
    return this.type === ConnectionType.Inbound ? null : this._socket;
  }

  connected() {
    return (!this._connecting && !!this._socket);
  }

  getInfo() {
    return this._channelData;
  }

  send(command, args) {
    try {
      this._socket.write(command);
      this._socket.write('\n');
      if (args) {
        const keys = Object.keys(args);
        for (let i = 0; i < keys.length; ++i) {
          const key = keys[i];
          this._socket.write(`${key}: ${args[key]}\n`);
        }
      }
      this._socket.write('\n');
    } catch (e) {
      this.emit(ConnectionEvent.Error, e);
    }
  }

  sendRecv(command, argsOrCallback, cb) {
    let args;
    if (typeof argsOrCallback === 'function') {
      cb = argsOrCallback;
      args = undefined;
    } else {
      args = argsOrCallback;
    }
    this._cmdCallbackQueue.push(cb);
    this.send(command, args);
  }

  api(command, argsOrCallback, cb) {
    let args;
    if (typeof argsOrCallback === 'function') {
      cb = argsOrCallback;
      args = '';
    } else if (Array.isArray(argsOrCallback)) {
      args = argsOrCallback.join(' ');
    } else {
      args = argsOrCallback;
    }
    this._apiCallbackQueue.push(cb);
    if (args) {
      command += ` ${args}`;
    }
    this.send(`api ${command}`);
  }

  bgapi(command, argsOrCallback, jobidOrCallback, cb) {
    let args;
    let jobid = uuid.v4();
    if (typeof argsOrCallback === 'function') {
      cb = argsOrCallback;
      args = '';
    } else {
      if (Array.isArray(argsOrCallback))
        args = argsOrCallback.join(' ');
      else
        args = argsOrCallback;
      if (typeof jobidOrCallback === 'function') {
        cb = jobidOrCallback;
      } else if (jobidOrCallback) {
        jobid = jobidOrCallback;
      }
    }
    if (args) {
      command += ` ${args}`;
    }
    if (this._usingFilters) {
      this._sendApiCommand(command, jobid, (cb) => this.filter(Parser_1.HeaderNames.JobUuid, jobid, cb), (cb) => this.filterDelete(Parser_1.HeaderNames.JobUuid, jobid, cb), cb);
    } else {
      this._sendApiCommand(command, jobid, (cb) => cb && cb(), (cb) => cb && cb(), cb);
    }
  }

  sendEvent(event, cb) {
    const eventName = event.getHeader(Parser_1.HeaderNames.EventName);
    const serializedEvent = event.serialize();
    const command = `sendevent ${eventName}\n${serializedEvent}`;
    this.sendRecv(command, cb);
  }

  filter(header, value, cb) {
    this._usingFilters = true;
    this.sendRecv(`filter ${header} ${value}`, cb);
  }

  filterDelete(header, valueOrCallback, cb) {
    let value;
    if (typeof valueOrCallback === 'function') {
      cb = valueOrCallback;
      value = undefined;
    }
    let command = `filter delete ${header}`;
    if (value) {
      command += ` ${value}`;
    }
    this.sendRecv(command, cb);
  }

  events(format, eventsOrCallback, cb) {
    let events = [ 'all' ];
    if (typeof eventsOrCallback === 'function') {
      cb = eventsOrCallback;
    } else if (eventsOrCallback) {
      if (Array.isArray(eventsOrCallback))
        events = eventsOrCallback;
      else
        events = eventsOrCallback.split(' ');
    }
    if (!(0, utils_1.isValidFormat)(format))
      format = 'plain';
    const isAll = events.length === 1 && events[0] === 'all';
    if (!isAll) {
      for (let i = 0; i < this._reqEvents.length; ++i) {
        if (events.indexOf(this._reqEvents[i]) !== -1)
          continue;
        events.push(this._reqEvents[i]);
      }
    }
    const command = `event ${format} ${events.join(' ')}`;
    this.sendRecv(command, cb);
  }

  execute(app, argOrCallback, uuidOrCallback, cb) {
    let arg = '';
    let uniqueId = uuid.v4();
    if (typeof argOrCallback === 'function') {
      cb = argOrCallback;
    } else {
      if (argOrCallback)
        arg = argOrCallback;
      if (typeof uuidOrCallback === 'function') {
        cb = uuidOrCallback;
      } else if (uuidOrCallback) {
        uniqueId = uuidOrCallback;
      }
    }
    const options = {
      'execute-app-name': app,
    };
    if (typeof arg !== 'undefined' && arg.toString().length > 0)
      options['execute-app-arg'] = arg.toString();
    if (this.type === ConnectionType.Inbound) {
      return this._sendExecute(uniqueId, options, cb);
    } else if (this._channelData) {
      const infoUniqueId = this._channelData.getHeader('Unique-ID');
      if (infoUniqueId)
        return this._sendExecute(infoUniqueId, options, cb);
    }
    return '';
  }

  executeAsync(app, argOrCallback, uuidOrCallback, cb) {
    const oldAsyncValue = this.execAsync;
    this.execAsync = true;
    const eventUuid = this.execute(app, argOrCallback, uuidOrCallback, cb);
    this.execAsync = oldAsyncValue;
    return eventUuid;
  }

  setAsyncExecute(value) {
    this.execAsync = value;
  }

  setEventLock(value) {
    this.execLock = value;
  }

  disconnect() {
    this.send('exit');
    this._socket.end();
  }

  auth(password, cb) {
    this.sendRecv(`auth ${password}`, (event) => {
      if (event.getHeader('Modesl-Reply-OK') === 'accepted') {
        this._authed = true;
        this.subscribe(this._reqEvents);
        this.emit(ConnectionEvent.AuthSuccess, event);
        this.emit(ConnectionEvent.Ready);
        if (cb)
          cb(null, event);
      } else {
        this._authed = false;
        this.emit(ConnectionEvent.AuthFail, event);
        if (cb)
          cb(new Error('Authentication Failed'), event);
      }
    });
  }

  subscribe(events, cb) {
    events = events || 'all';
    this.events('json', events, cb);
  }

  show(item, cb) {
    this.bgapi(`show ${item} as json`, (event) => {
      const body = event.getBody();
      let parsed = {};
      if (body.indexOf('-ERR') !== -1) {
        if (cb)
          cb(new Error(body));
        return;
      }
      try {
        const parsed = JSON.parse(body);
        if (cb)
          cb(null, parsed.rows);
      } catch (e) {
        if (cb) {
          cb(e);
        }
      }
    });
  }

  originate(options, cb) {
    let arg = `sofia/${options.profile}/${options.number}@${options.gateway}`;
    if (options.app)
      arg += ` &${options.app}`;
    if (options.sync)
      this.api('originate', arg, cb);
    else
      this.bgapi('originate', arg, cb);
  }

  message(options, cb) {
    const event = new Event_1.Event('custom', 'SMS::SEND_MESSAGE');
    event.addHeader('proto', 'sip');
    event.addHeader('dest_proto', 'sip');
    event.addHeader('from', `sip:${options.from}`);
    event.addHeader('from_full', `sip:${options.from}`);
    event.addHeader('to', options.to);
    event.addHeader('sip_profile', options.profile);
    event.addHeader('subject', options.subject);
    if (options.deliveryConfirmation)
      event.addHeader('blocking', 'true');
    event.addHeader('type', 'text/plain');
    event.addHeader('Content-Type', 'text/plain');
    event.addBody(options.body);
    this.sendEvent(event, cb);
  }

  answer() {
    return new Promise(res => {
      this.execute('answer', _ => res());
    });
  }

  hangup(cause = 'NORMAL_CLEARING') {
    return new Promise(res => {
      this.execute('hangup', cause, _ => res());
    });
  }

  set(arg) {
    return new Promise(res => {
      this.execute('set', arg, _ => res());
    });
  }

  startDtmf() {
    return new Promise(res => {
      this.execute('start_dtmf', _ => res());
    });
  }

  stopDtmf() {
    return new Promise(res => {
      this.execute('stop_dtmf', _ => res());
    });
  }

  sleep(durationMs) {
    return new Promise(res => {
      this.execute('sleep', `${durationMs}`, _ => res());
    });
  }

  speak(str, voice = 'slt') {
    return new Promise(res => {
      this.execute('speak', `flite|${voice}|${str}`, _ => res());
    });
  }

  generateTone(onDurationMs, offDurationMs, frequencies, copies = null, volume = null, loops = null) {
    return new Promise(res => {
      const cp = copies ? `L=${copies};` : '';
      const vol = volume ? `v=${volume};` : '';
      const lp = loops ? `;loops=${loops}` : '';
      let frq = '';
      if (frequencies.length === 1)
        frq = frequencies.join('');
      if (frequencies.length > 1)
        frq = frequencies.join(',');
      this.execute('playback', `tone_stream://${cp}${vol}%(${onDurationMs},${offDurationMs},${frq})${lp}`, _ => res());
    });
  }

  async playAndGetDigits(minDigits, maxDigits, maxTries, timeoutMs, terminator = '#', promptFile, invalidPromptFile, variable, arg) {
    return new Promise(res => {
      this.execute('play_and_get_digits', `${minDigits} ${maxDigits} ${maxTries} ${timeoutMs} ${terminator} ${promptFile} ${invalidPromptFile} ${variable} ${arg}`, ev => {
        const result = ev.getHeader(`variable_${variable}`);
        res(result);
      });
    });
  }

  playBack(file) {
    return new Promise(res => {
      this.execute('playback', file, _ => res());
    });
  }

  log(message, level = logger_1.QvLogLevel.INFO) {
    return new Promise(res => {
      this.execute('log', `${level} ${message}`, _ => res());
    });
  }

  bridge(endpoints, grouping = ',') {
    if (!Array.isArray(endpoints)) {
      return new Promise(res => {
        this.execute('bridge', endpoints, _ => res());
      });
    }
    return new Promise(res => {
      this.execute('bridge', endpoints.map(x => x.trim).join(grouping), _ => res());
    });
  }

  transfer(dest, context = 'default', dialplan = 'XML') {
    return new Promise(res => {
      this.execute('transfer', `${dest} ${dialplan} ${context}`, _ => res());
    });
  }

  getChannelVariable(variableName, isCustomVariable = true) {
    return new Promise(res => {
      this.execute('info', '', cb => {
        const vr = cb.getHeader(isCustomVariable ? `variable_${variableName}` : variableName);
        res(vr);
      });
    });
  }

  bridgeToGroup(group) {
    return new Promise(res => {
      this.execute('bridge', `group/${group}@$\${domain}`, _ => res());
    });
  }

  hashInsert(selector, uuid) {
    return new Promise(res => {
      this.execute('hash', `insert/domain-$\${domain}/${selector}${uuid ? `/${uuid}` : ''}`, _ => res());
    });
  }

  hashRetrieve(selector) {
    return new Promise((res) => {
      this.execute('set', `res=\${hash(select/domain-$\${domain}/${selector})}`, ev => {
        const hash = ev.getHeader('variable_res');
        res(hash);
      });
    });
  }

  hashDelete(selector) {
    return new Promise(res => {
      this.execute(`hash`, `delete/domain-$\${domain}/${selector}`, _ => res());
    });
  }

  record(path, timeLimitSec, silenceThreshold = 200, silenceHits = 3) {
    return new Promise(res => {
      this.execute('record', `${path} ${timeLimitSec} ${silenceThreshold} ${silenceHits}`, _ => res());
    });
  }

  reloadXml() {
    return new Promise(res => {
      this.api('reloadxml', response => res(response.getBody()));
    });
  }

  _sendApiCommand(command, jobid, addToFilter, removeFromFilter, cb) {
    const params = { [Parser_1.HeaderNames.JobUuid]: jobid };
    addToFilter(() => {
      if (cb) {
        this.once(`esl::event::BACKGROUND_JOB::${jobid}`, (event) => {
          removeFromFilter(() => cb(event));
        });
      } else {
        removeFromFilter();
      }
      this.sendRecv(`bgapi ${command}`, params);
    });
  }

  _sendExecute(uniqueId, args, cb) {
    args['call-command'] = 'execute';
    if (this.execAsync)
      args['async'] = 'true';
    if (this.execLock)
      args['event-lock'] = 'true';
    const eventUuid = uuid.v4();
    args['Event-UUID'] = eventUuid;
    const eventName = `esl::event::CHANNEL_EXECUTE_COMPLETE::${uniqueId}`;
    const cbWrapper = (event) => {
      const id = event.getHeader('Application-UUID') || event.getHeader('Event-UUID');
      if (args['Event-UUID'] === id) {
        this.removeListener(eventName, cbWrapper);
        if (cb)
          cb(event);
      }
    };
    this.on(eventName, cbWrapper);
    this.send(`sendmsg ${uniqueId}`, args);
    return eventUuid;
  }

  _onConnect() {
    this._parser = new Parser_1.Parser(this._socket);
    this._parser.on(Parser_1.ParserEvent.Event, this._onEvent.bind(this));
    this._parser.on(Parser_1.ParserEvent.Error, (err) => this.emit(ConnectionEvent.Error, err));
    this._connecting = false;
    this.emit(ConnectionEvent.Connect);
  }

  _onEvent(event, headers, body) {
    const uniqueId = event.getHeader('Job-UUID') || event.getHeader('Unique-ID') || event.getHeader('Core-UUID');
    const suffix = uniqueId ? `::${uniqueId}` : '';
    let emitName = 'esl::event';
    switch (headers[Parser_1.HeaderNames.ContentType]) {
      case 'auth/request':
        emitName += '::auth::request';
        break;
      case 'command/reply':
        emitName += '::command::reply';
        if (headers[Parser_1.HeaderNames.EventName] === 'CHANNEL_DATA') {
          if (this.type === ConnectionType.Outbound) {
            this._channelData = event;
            this.emit(ConnectionEvent.ChannelDataPrefix + suffix, event);
          }
        }
        break;
      case 'log/data':
        emitName += '::logdata';
        break;
      case 'text/disconnect-notice':
        emitName += '::disconnect::notice';
        break;
      case 'api/response':
        emitName += '::api::response';
        break;
      case 'text/event-json':
      case 'text/event-plain':
      case 'text/event-xml':
        emitName += '::' + event.getHeader(Parser_1.HeaderNames.EventName) + suffix;
        break;
      default:
        emitName += '::raw::' + headers[Parser_1.HeaderNames.ContentType];
    }
    this.emit(emitName, event, headers, body);
  }
}

exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map