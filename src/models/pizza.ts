import { Entity, model, property } from "@loopback/repository";

export class Pizza extends Entity {

    @property({
        type: 'number',
        id: true
    })

    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;
    
}