import { Entity } from '@loopback/repository';
export declare class role extends Entity {
    id?: number;
    user_id: number;
    role_id: number;
}
