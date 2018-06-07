import { Entity } from '@loopback/repository';
export declare class payment extends Entity {
    id?: number;
    user_id: number;
    card_number: number;
    expiration_date: string;
    bank: number;
}
