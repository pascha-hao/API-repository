import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { role } from '../models/role';
export declare class RoleRepository extends DefaultCrudRepository<role, typeof role.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
