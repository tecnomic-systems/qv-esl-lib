/// <reference types="node" />
import * as net from 'net';
import { EventEmitter2 } from 'eventemitter2';
import { Connection } from './Connection';
import { ICallback, IDictionary } from '../utils';
export declare type IServerReadyCallback = ICallback<void>;
export interface IServerOptions {
    myevents?: boolean;
    server?: net.Server;
    port?: number;
    host?: string;
}
export declare enum ServerEvent {
    ConnectionOpen = "connection::open",
    ConnectionReady = "connection::ready",
    ConnectionClose = "connection::close",
    Ready = "ready"
}
export declare class Server extends EventEmitter2 {
    readonly connections: IDictionary<Connection>;
    readonly server: net.Server;
    private _bindEvents;
    constructor(readyCb?: IServerReadyCallback);
    constructor(options: IServerOptions, readyCb?: IServerReadyCallback);
    bindEventsEnabled(): boolean;
    close(callback?: (err?: Error | undefined) => void): void;
    onConnectionReady(): Promise<Connection>;
    private _onConnection;
}
