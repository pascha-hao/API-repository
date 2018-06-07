import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { donations } from '../models/donations';


export class DonationsRepository extends DefaultCrudRepository <
    donations, 
    typeof donations.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource){ 
        super(donations, datasource); 
    }
}