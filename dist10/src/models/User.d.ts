import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    username: string;
    password: string;
    Name: string;
    address: string;
    email: string;
    donations: string;
    getId(): number | undefined;
}
