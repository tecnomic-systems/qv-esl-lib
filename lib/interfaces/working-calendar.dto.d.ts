export interface WorkingTimeDto {
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    from: string;
    to: string;
    open: boolean;
}
export interface WorkingCalendarDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    timings: WorkingTimeDto[];
    promptPath: string;
}
