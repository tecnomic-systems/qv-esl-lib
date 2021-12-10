'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.EslEvents = void 0;
var EslEvents;
(function(EslEvents) {
  EslEvents['CONNECTION_READY'] = 'connection::ready';
  EslEvents['CONNECTION_OPEN'] = 'connection::open';
  EslEvents['CONNECTION_CLOSE'] = 'connection::close';
  EslEvents['ADD_SCHEDULE'] = 'esl::event::ADD_SCHEDULE::*';
  EslEvents['API'] = 'esl::event::API::*';
  EslEvents['BACKGROUND_JOB'] = 'esl::event::BACKGROUND_JOB::*';
  EslEvents['CALL_DETAIL'] = 'esl::event::CALL_DETAIL::*';
  EslEvents['CALL_SECURE'] = 'esl::event::CALL_SECURE::*';
  EslEvents['CALL_SETUP_REQ'] = 'esl::event::CALL_SETUP_REQ::*';
  EslEvents['CALL_UPDATE'] = 'esl::event::CALL_UPDATE::*';
  EslEvents['CDR'] = 'esl::event::CDR::*';
  EslEvents['CHANNEL_ANSWER'] = 'esl::event::CHANNEL_ANSWER::*';
  EslEvents['CHANNEL_APPLICATION'] = 'esl::event::CHANNEL_APPLICATION::*';
  EslEvents['CHANNEL_BRIDGE'] = 'esl::event::CHANNEL_BRIDGE`::*';
  EslEvents['CHANNEL_CALLSTATE'] = 'esl::event::CHANNEL_CALLSTATE::*';
  EslEvents['CHANNEL_CREATE'] = 'esl::event::CHANNEL_CREATE::*';
  EslEvents['CHANNEL_DATA'] = 'esl::event::CHANNEL_DATA::*';
  EslEvents['CHANNEL_DESTROY'] = 'esl::event::CHANNEL_DESTROY::*';
  EslEvents['CHANNEL_EXECUTE'] = 'esl::event::CHANNEL_EXECUTE::*';
  EslEvents['CHANNEL_EXECUTE_COMPLETE'] = 'esl::event::CHANNEL_EXECUTE_COMPLETE::*';
  EslEvents['CHANNEL_GLOBAL'] = 'esl::event::CHANNEL_GLOBAL::*';
  EslEvents['CHANNEL_HANGUP'] = 'esl::event::CHANNEL_HANGUP::*';
  EslEvents['CHANNEL_HANGUP_COMPLETE'] = 'esl::event::CHANNEL_HANGUP_COMPLETE::*';
  EslEvents['CHANNEL_HOLD'] = 'esl::event::CHANNEL_HOLD::*';
  EslEvents['CHANNEL_ORIGINATE'] = 'esl::event::CHANNEL_ORIGINATE::*';
  EslEvents['CHANNEL_OUTGOING'] = 'esl::event::CHANNEL_OUTGOING::*';
  EslEvents['CHANNEL_PARK'] = 'esl::event::CHANNEL_PARK::*';
  EslEvents['CHANNEL_PROGRESS'] = 'esl::event::CHANNEL_PROGRESS::*';
  EslEvents['CHANNEL_PROGRESS_MEDIA'] = 'esl::event::CHANNEL_PROGRESS_MEDIA::*';
  EslEvents['CHANNEL_STATE'] = 'esl::event::CHANNEL_STATE::*';
  EslEvents['CHANNEL_UNBRIDGE'] = 'esl::event::CHANNEL_UNBRIDGE::*';
  EslEvents['CHANNEL_UNHOLD'] = 'esl::event::CHANNEL_UNHOLD::*';
  EslEvents['CHANNEL_UNPARK'] = 'esl::event::CHANNEL_UNPARK::*';
  EslEvents['CHANNEL_UUID'] = 'esl::event::CHANNEL_UUID::*';
  EslEvents['CLONE'] = 'esl::event::CLONE::*';
  EslEvents['CODEC'] = 'esl::event::CODEC::*';
  EslEvents['COMMAND'] = 'esl::event::COMMAND::*';
  EslEvents['CONFERENCE_DATA'] = 'esl::event::CONFERENCE_DATA::*';
  EslEvents['CONFERENCE_DATA_QUERY'] = 'esl::event::CONFERENCE_DATA_QUERY::*';
  EslEvents['CUSTOM'] = 'esl::event::CUSTOM::*';
  EslEvents['DEL_SCHEDULE'] = 'esl::event::DEL_SCHEDULE::*';
  EslEvents['DETECTED_SPEECH'] = 'esl::event::DETECTED_SPEECH::*';
  EslEvents['DETECTED_TONE'] = 'esl::event::DETECTED_TONE::*';
  EslEvents['DEVICE_STATE'] = 'esl::event::DEVICE_STATE::*';
  EslEvents['DTMF'] = 'esl::event::DTMF::*';
  EslEvents['EXE_SCHEDULE'] = 'esl::event::EXE_SCHEDULE::*';
  EslEvents['FAILURE'] = 'esl::event::FAILURE::*';
  EslEvents['GENERAL'] = 'esl::event::GENERAL::*';
  EslEvents['HEARTBEAT'] = 'esl::event::HEARTBEAT::*';
  EslEvents['LOG'] = 'esl::event::LOG::*';
  EslEvents['MEDIA_BUG_START'] = 'esl::event::MEDIA_BUG_START::*';
  EslEvents['MEDIA_BUG_STOP'] = 'esl::event::MEDIA_BUG_STOP::*';
  EslEvents['MESSAGE'] = 'esl::event::MESSAGE::*';
  EslEvents['MESSAGE_QUERY'] = 'esl::event::MESSAGE_QUERY::*';
  EslEvents['MESSAGE_WAITING'] = 'esl::event::MESSAGE_WAITING::*';
  EslEvents['MODULE_LOAD'] = 'esl::event::MODULE_LOAD::*';
  EslEvents['MODULE_UNLOAD'] = 'esl::event::MODULE_UNLOAD::*';
  EslEvents['NAT'] = 'esl::event::NAT::*';
  EslEvents['NOTALK'] = 'esl::event::NOTALK::*';
  EslEvents['NOTIFY'] = 'esl::event::NOTIFY::*';
  EslEvents['NOTIFY_IN'] = 'esl::event::NOTIFY_IN::*';
  EslEvents['PHONE_FEATURE'] = 'esl::event::PHONE_FEATURE::*';
  EslEvents['PHONE_FEATURE_SUBSCRIBE'] = 'esl::event::PHONE_FEATURE_SUBSCRIBE::*';
  EslEvents['PLAYBACK_START'] = 'esl::event::PLAYBACK_START::*';
  EslEvents['PLAYBACK_STOP'] = 'esl::event::PLAYBACK_STOP::*';
  EslEvents['PRESENCE_IN'] = 'esl::event::PRESENCE_IN::*';
  EslEvents['PRESENCE_OUT'] = 'esl::event::PRESENCE_OUT::*';
  EslEvents['PRESENCE_PROBE'] = 'esl::event::PRESENCE_PROBE::*';
  EslEvents['PRIVATE_COMMAND'] = 'esl::event::PRIVATE_COMMAND::*';
  EslEvents['PUBLISH'] = 'esl::event::PUBLISH::*';
  EslEvents['QUEUE_LEN'] = 'esl::event::QUEUE_LEN::*';
  EslEvents['RECORD_START'] = 'esl::event::RECORD_START::*';
  EslEvents['RECORD_STOP'] = 'esl::event::RECORD_STOP::*';
  EslEvents['RECV_INFO'] = 'esl::event::RECV_INFO::*';
  EslEvents['RECV_MESSAGE'] = 'esl::event::RECV_MESSAGE::*';
  EslEvents['RECV_RTCP_MESSAGE'] = 'esl::event::RECV_RTCP_MESSAGE::*';
  EslEvents['RECYCLE'] = 'esl::event::RECYCLE::*';
  EslEvents['RELOADXML'] = 'esl::event::RELOADXML::*';
  EslEvents['REQUEST_PARAMS'] = 'esl::event::REQUEST_PARAMS::*';
  EslEvents['RE_SCHEDULE'] = 'esl::event::RE_SCHEDULE::*';
  EslEvents['ROSTER'] = 'esl::event::ROSTER::*';
  EslEvents['SEND_INFO'] = 'esl::event::SEND_INFO::*';
  EslEvents['SEND_MESSAGE'] = 'esl::event::SEND_MESSAGE::*';
  EslEvents['SESSION_HEARTBEAT'] = 'esl::event::SESSION_HEARTBEAT::*';
  EslEvents['SHUTDOWN'] = 'esl::event::SHUTDOWN::*';
  EslEvents['STARTUP'] = 'esl::event::STARTUP::*';
  EslEvents['SUBCLASS_ANY'] = 'esl::event::SUBCLASS_ANY::*';
  EslEvents['TALK'] = 'esl::event::TALK::*';
  EslEvents['TRAP'] = 'esl::event::TRAP::*';
  EslEvents['UNPUBLISH'] = 'esl::event::UNPUBLISH::*';
})(EslEvents = exports.EslEvents || (exports.EslEvents = {}));
//# sourceMappingURL=esl-events.js.map