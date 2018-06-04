import {Entity, property, model} from '@loopback/repository';

@model()
export class Login extends Entity {
    @property({
        type: 'string',
        required: true
    })
    username: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;

    
    

}