export interface GatewayDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    username: string;
    password: string;
    assignedToll: Array<'local' | 'domestic' | 'international' | '*'>;
    tollPathExpression: string;
    realm: string;
    fromUser: string;
    fromDomain: string;
    extension: string;
    proxy: string;
    registerProxy: string;
    expireSeconds: string;
    register: string;
    registerTransport: string;
    retrySeconds: string;
    callerIdInFrom: string;
    ping: string;
    cidType: string;
    rfc5626: string;
    regId: string;
}
