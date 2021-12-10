export interface GroupDto {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    users: GroupUserDto[];
}
export interface GroupUserDto {
    groupName: string;
    userId: string;
}
