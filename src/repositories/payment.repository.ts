import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { payment } from '../models/payment';

export class PaymentRepository extends DefaultCrudRepository <
    payment, 
    typeof payment.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource){ 
        super(payment, datasource); 
    }
}