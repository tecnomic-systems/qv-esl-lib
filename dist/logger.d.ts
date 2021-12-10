import { Event } from './esl/Event';
declare class Logger {
    private _logFunc;
    private _enabled;
    get enabled(): boolean;
    private _level;
    get level(): number;
    setLogFunction(logFunc: (msg: string) => void): void;
    setLogLevel(level: number): number;
    log(event: Event): void;
}
export declare enum QvLogLevel {
    CONSOLE = "CONSOLE",
    ALERT = "ALERT",
    CRIT = "CRIT",
    ERR = "ERR",
    WARNING = "WARNING",
    NOTICE = "NOTICE",
    INFO = "INFO",
    DEBUG = "DEBUG"
}
export declare const logger: Logger;
export {};
