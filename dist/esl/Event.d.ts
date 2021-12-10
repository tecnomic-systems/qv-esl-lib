import { IFormat } from '../utils';
import { IHeadersMap } from './Parser';
export declare class Event {
    private _subclass;
    private _headerIndex;
    constructor(headers: IHeadersMap, body?: string);
    constructor(type: string, subclass?: string);
    private _headers;
    get headers(): Readonly<IHeadersMap>;
    private _type;
    get type(): string;
    private _body;
    get body(): string;
    serialize(format?: IFormat): string;
    setPriority(priority: number): void;
    getHeader(name: string): string | null;
    getBody(): string;
    getType(): string;
    addBody(value: string): string;
    addHeader(name: string, value: string): void;
    delHeader(name: string): void;
    firstHeader(): string | null;
    nextHeader(): string | null;
}
