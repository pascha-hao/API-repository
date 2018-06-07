import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { payment } from '../models/payment';
export declare class PaymentRepository extends DefaultCrudRepository<payment, typeof payment.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
