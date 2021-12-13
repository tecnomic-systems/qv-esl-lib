export interface HolidayMessageDto {
    dateFrom: string;
    dateTo: string;
    msgPath: string;
}
export interface HolidayCalendarDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    details: HolidayMessageDto;
}
