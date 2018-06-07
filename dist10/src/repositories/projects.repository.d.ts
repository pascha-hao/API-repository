import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { projects } from '../models/projects';
export declare class ProjectsRepository extends DefaultCrudRepository<projects, typeof projects.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
