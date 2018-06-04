import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Login } from '../models/login';
export declare class LoginRepository extends DefaultCrudRepository<Login, typeof Login.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
