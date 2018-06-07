import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { donations } from '../models/donations';
export declare class DonationsRepository extends DefaultCrudRepository<donations, typeof donations.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
