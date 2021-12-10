export interface DtmfInputDefinitionDto {
    minDigit: number;
    maxDigit: number;
    maxTries: number;
    timeoutMs: number;
    terminator: string;
    promptPath: string;
    invalidPromptPath: string;
    variable: string;
    arg?: string;
}
export interface NodeRouteDefDto {
    routeType: 'group' | 'user';
    routeTo: string;
}
export interface CalendarDetailDto {
    isSet: boolean;
    id: string;
}
export interface NodeSizeDto {
    width: number;
    height: number;
}
export interface NodeCoordinatesDto {
    x: number;
    y: number;
}
export interface NodeRootDefDto {
    menuMaxRetries: number;
    directUserRouting: boolean;
    extensionLength: number;
    workingCalendar: CalendarDetailDto;
    holidayCalendar: CalendarDetailDto;
    invalidPrompt: string;
    goodbyePrompt: string;
}
export interface NodeMenuDefDto {
    menuDef: DtmfInputDefinitionDto;
    options: {
        [key: number]: string;
    };
}
export interface NodeMediaDefDto {
    mediaPath: string;
    mediaId: string;
}
export interface NodeMetaDefDto {
    dtmfNumber: number;
    parentRef: string;
    childRefs: {
        [key: number]: string;
    };
}
export interface NodeDataDto {
    isRoot?: boolean;
    isMenu?: boolean;
    isRoute?: boolean;
    isMedia?: boolean;
    root?: NodeRootDefDto;
    menu?: NodeMenuDefDto;
    route?: NodeRouteDefDto;
    media?: NodeMediaDefDto;
    meta?: NodeMetaDefDto;
}
export interface NodeDto {
    id: string;
    title: string;
    size?: NodeSizeDto;
    coordinates?: NodeCoordinatesDto;
    portsIn?: {
        [key: string]: string;
    };
    portsOut?: {
        [key: string]: string;
    };
    data: NodeDataDto;
}
export interface NodesDto {
    [key: string]: NodeDto;
}
export interface LinkDto {
    id: string;
    start_id: string;
    start_port?: string;
    end_id: string;
    end_port?: string;
}
export interface LinksDto {
    [key: string]: LinkDto;
}
export interface AATreeDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    nodes: NodesDto;
    links: LinksDto;
}
