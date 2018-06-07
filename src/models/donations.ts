import {Entity, property, model} from '@loopback/repository';

@model()
export class donations extends Entity {
    @property({
        type: 'number',
        required: true,
        id: true
    })
    id?: number; 

    @property({
        type: 'string',
        required: true
    })
    user_id: string;

    @property({
        type: 'string',
        required: true
    })
    charity_id: string;

    @property({
        type: 'string',
        required: true
    })
    amount: string;

    
    

}