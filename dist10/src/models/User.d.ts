import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    Name: string;
    username: string;
    Email: string;
    Address: string;
    password: string;
}
