export declare type ICallback<T> = (arg: T) => void;
export declare type IErrorCallback<T> = (err: Error | null, result?: T) => void;
export declare type IDictionary<T> = Partial<{
    [key: string]: T;
}>;
export declare function encodeXml(str: string): string;
export declare type IFormat = 'plain' | 'xml' | 'json';
export declare const VALID_FORMATS: string[];
export declare function isValidFormat(format: string): format is IFormat;
