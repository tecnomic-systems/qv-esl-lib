export interface InboundRuleRouteTypeDto {
    id: string | string[];
    ringType: 'sequential' | 'simultaneous';
}
export interface InboundRuleRouteDto {
    to: 'extension' | 'group' | 'auto-attendant';
    extension: InboundRuleRouteTypeDto;
    group: InboundRuleRouteTypeDto;
}
export interface InboundRuleDto {
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    channelData: 'ani' | 'destination_number';
    expression: string;
    route: InboundRuleRouteDto;
}
