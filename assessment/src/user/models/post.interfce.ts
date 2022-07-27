import { IsNotEmpty,IsNumber, IsString,IsDate } from 'class-validator';


export interface UserPost{

    id?:number;
    mobile_no?: number;

    firstname?: string;
    lastname?: string;

    createdAt?: Date;

    
};