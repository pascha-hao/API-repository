import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { role } from '../models/role';


export class RoleRepository extends DefaultCrudRepository <
    role, 
    typeof role.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource){ 
        super(role, datasource); 
    }
}