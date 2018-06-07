import { Entity } from '@loopback/repository';
export declare class donations extends Entity {
    id?: number;
    user_id: string;
    charity_id: string;
    amount: string;
}
