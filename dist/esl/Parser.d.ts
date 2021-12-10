/// <reference types="node" />
import * as net from 'net';
import { Buffer } from 'buffer';
import { EventEmitter2 } from 'eventemitter2';
export declare enum HeaderNames {
    ContentLength = "Content-Length",
    ContentType = "Content-Type",
    ReplyText = "Reply-Text",
    EventName = "Event-Name",
    EventSubclass = "Event-Subclass",
    JobUuid = "Job-UUID"
}
export declare enum ParserEvent {
    Error = "error",
    Event = "esl::event"
}
export declare type IHeadersMap = Partial<{
    [key: string]: string;
}>;
export declare class Parser extends EventEmitter2 {
    socket: net.Socket;
    buffer: Buffer;
    private _bodyLen;
    private _encoding;
    private _headers;
    constructor(socket: net.Socket, encoding?: BufferEncoding);
    static parseHeaderText(text: string): IHeadersMap;
    static parsePlainBody(text: string): {
        error: Error | null;
        headers: IHeadersMap;
    };
    static parseXmlBody(xmlText: string): {
        error: Error | null;
        headers: IHeadersMap;
    };
    private _onData;
    private _onEnd;
    private _indexOfHeaderEnd;
    private _parseHeaders;
    private _parseBody;
    private _parseEvent;
}
