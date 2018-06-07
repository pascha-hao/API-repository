import {Entity, property, model, DateType} from '@loopback/repository';

@model()
export class User extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number; 

    @property({
        type: 'string',
        required: true
    })
    Name: string;

    @property({
        type: 'string'
    })
    username: string;

    @property({
        type: 'string'
    })
    Email: string;

    @property({
        type: 'string'
    })
    Address: string;

    @property({
        type: 'string'
    })
    password: string;

    @property({
        type: 'string'
    })
    donations: string;

    @property({
        type: 'dateString'
    })
    date: Date;

    getId() {
        return this.id;
    }
}