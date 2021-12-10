export interface ExtensionParamsDto {
    password: string;
    vmPassword: string;
}
export interface FallbackRouteDto {
    type: 'voicemail' | 'extension' | 'external';
    value: string;
}
export interface ExtensionVarsDto {
    tollAllow: Array<'local' | 'domestic' | 'international'>;
    accountCode: string;
    outboundCallerIdName: string;
    outboundCallerIdNumber: string;
    directoryFullName: string;
    callGroup: string;
    fallbackRoute: FallbackRouteDto;
    voicemailEnabled: boolean;
}
export interface ExtensionDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    userId: string;
    params: ExtensionParamsDto;
    variables: ExtensionVarsDto;
}
