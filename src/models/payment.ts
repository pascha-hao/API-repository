import {Entity, property, model} from '@loopback/repository';

@model()
export class Charity extends Entity {
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
    name: string;

    @property({
        type: 'number',
        required: true
    })
    charity_id: number;

    
    

}