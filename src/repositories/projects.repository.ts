import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { projects } from '../models/projects';


export class ProjectsRepository extends DefaultCrudRepository <
    projects, 
    typeof projects.prototype.id
> {
    constructor(@inject('datasources.db') protected datasource: DataSource){ 
        super(projects, datasource); 
    }
}