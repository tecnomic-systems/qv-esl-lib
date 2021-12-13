/// <reference types="node" />
import * as net from 'net';
import { EventEmitter2 } from 'eventemitter2';
import { Event } from './Event';
import { ICallback, IDictionary, IErrorCallback, IFormat } from '../utils';
import { QvLogLevel } from '../logger';
export declare type IConnectionReadyCallback = ICallback<void>;
export declare type IEventCallback = ICallback<Event>;
export interface IOriginateOptions {
    profile: string;
    number: string;
    gateway: string;
    app?: string;
    sync?: boolean;
}
export interface IMessageOptions {
    to: string;
    from: string;
    profile: string;
    body: string;
    subject: string;
    deliveryConfirmation?: string;
}
export declare enum ConnectionType {
    Outbound = 0,
    Inbound = 1
}
export declare enum ConnectionEvent {
    AuthSuccess = "esl::event::auth::success",
    AuthFail = "esl::event::auth::fail",
    Connect = "esl::connect",
    ChannelDataPrefix = "esl::event::CHANNEL_DATA",
    End = "esl::end",
    Error = "error",
    Ready = "esl::ready"
}
export declare class Connection extends EventEmitter2 {
    execAsync: boolean;
    execLock: boolean;
    readonly type: ConnectionType;
    private _reqEvents;
    private _parser;
    private _usingFilters;
    private _channelData;
    private _cmdCallbackQueue;
    private _apiCallbackQueue;
    constructor(socket: net.Socket, type: ConnectionType, readyCallback?: IConnectionReadyCallback);
    private _socket;
    get socket(): net.Socket;
    private _authed;
    get authed(): boolean;
    private _connecting;
    get connecting(): boolean;
    static createInbound(options: net.NetConnectOpts, password: string, readyCallback?: IConnectionReadyCallback): Connection;
    static createInbound(socket: net.Socket, password: string, readyCallback?: IConnectionReadyCallback): Connection;
    static createOutbound(socket: net.Socket, readyCallback?: IConnectionReadyCallback): Connection;
    socketDescriptor(): net.Socket | null;
    connected(): boolean;
    getInfo(): Event | null;
    send(command: string, args?: IDictionary<string>): void;
    sendRecv(command: string, cb?: IEventCallback): void;
    sendRecv(command: string, args: IDictionary<string>, cb?: IEventCallback): void;
    api(command: string, cb?: IEventCallback): void;
    api(command: string, args: string | string[], cb?: IEventCallback): void;
    bgapi(command: string, cb?: IEventCallback): void;
    bgapi(command: string, args: string | string[], cb?: IEventCallback): void;
    bgapi(command: string, args: string | string[], jobid: string, cb?: IEventCallback): void;
    sendEvent(event: Event, cb?: IEventCallback): void;
    filter(header: string, value: string, cb?: IEventCallback): void;
    filterDelete(header: string, cb?: IEventCallback): void;
    filterDelete(header: string, value: string, cb?: IEventCallback): void;
    events(format: IFormat, cb?: IEventCallback): void;
    events(format: IFormat, events: string | string[], cb?: IEventCallback): void;
    execute(app: string, cb?: IEventCallback): string;
    execute(app: string, arg: string, cb?: IEventCallback): string;
    execute(app: string, arg: string, uuid: string, cb?: IEventCallback): string;
    executeAsync(app: string, cb?: IEventCallback): string;
    executeAsync(app: string, arg: string, cb?: IEventCallback): string;
    executeAsync(app: string, arg: string, uuid: string, cb?: IEventCallback): string;
    setAsyncExecute(value: boolean): void;
    setEventLock(value: boolean): void;
    disconnect(): void;
    auth(password: string, cb?: IErrorCallback<Event>): void;
    subscribe(events: string | string[], cb?: IEventCallback): void;
    show(item: string, cb?: IErrorCallback<any[]>): void;
    originate(options: IOriginateOptions, cb?: IEventCallback): void;
    message(options: IMessageOptions, cb?: IEventCallback): void;
    answer(): Promise<void>;
    hangup(cause?: string): Promise<void>;
    set(arg: string): Promise<void>;
    startDtmf(): Promise<void>;
    stopDtmf(): Promise<void>;
    sleep(durationMs: number): Promise<void>;
    speak(str: string, voice?: 'slt' | 'kal'): Promise<void>;
    generateTone(onDurationMs: number, offDurationMs: number, frequencies: number[], copies?: number | null, volume?: number | null, loops?: number | null): Promise<void>;
    playAndGetDigits(minDigits: number, maxDigits: number, maxTries: number, timeoutMs: number, terminator: string | undefined, promptFile: string, invalidPromptFile: string, variable: string, arg?: string): Promise<string | null>;
    playBack(file: string): Promise<void>;
    log(message: string, level?: QvLogLevel): Promise<void>;
    bridgeToUser(endpoint: string): Promise<void>;
    bridgeToUsers(endpoints: string[], grouping?: ',' | '|'): Promise<void>;
    bridgeToGroup(groupName: string): Promise<void>;
    bridge(endpoints: string | string[], grouping?: ',' | '|'): Promise<void>;
    transfer(dest: string, context?: string, dialplan?: string): Promise<void>;
    getChannelVariable(variableName: string, isCustomVariable?: boolean): Promise<string | null>;
    hashInsert(selector: string, uuid?: string): Promise<void>;
    hashRetrieve(selector: string): Promise<string | null>;
    hashDelete(selector: string): Promise<void>;
    record(path: string, timeLimitSec: number, silenceThreshold?: number, silenceHits?: number): Promise<boolean>;
    reloadXml(): Promise<string>;
    private _sendApiCommand;
    private _sendExecute;
    private _onConnect;
    private _onEvent;
}
