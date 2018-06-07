import {Entity, property, model} from '@loopback/repository';

@model()
export class role extends Entity {
    @property({
        type: 'number',
        required: true,
        id: true
    })
    id?: number; 

    @property({
        type: 'number',
        required: true
    })
    user_id: number;
    
    @property({
        type: 'number',
        required: true
    })
    role_id: number;

    
   

}