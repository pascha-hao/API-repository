import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Login } from '../models/login';

export class LoginRepository extends DefaultCrudRepository <
    Login, 
    typeof Login.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource){ 
        super(Login, datasource); 
    }
}