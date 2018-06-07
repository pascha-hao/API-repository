import {Entity, property, model, DateType} from '@loopback/repository';

@model()
export class User extends Entity {
    @property({
        type: 'number',
        required: true,
        id: true
    })
    id?: number; 

    @property({
        type: 'string'
    })
    username: string;

    @property({
        type: 'string'
    })
    password: string;

    @property({
        type: 'string',
        required: true
    })
    Name: string;

    @property({
        type: 'string'
    })
    address: string;

    @property({
        type: 'string'
    })
    email: string;

    @property({
        type: 'string'
    })
    donations: string;

    getId() {
        return this.id;
    }
}