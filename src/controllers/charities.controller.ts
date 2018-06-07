import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { CharityRepository } from '../repositories/charities.repository'
import { post, get, requestBody, param } from '@loopback/rest';
import { User } from '../models/user'; 
import { Login } from '../models/login';
import { Charity } from '../models/charities';

export class CharityController { 
    constructor(@repository(CharityRepository.name) private charitiesRepo: CharityRepository) {}


    @get('/charities')
    async getAllCharities(): Promise<Array<Charity>> {
        return await this.charitiesRepo.find();
    }

    @get('/charities/{id}')
    async findCharitiesById(@param.path.number('id') id: number): Promise<Charity> {
        return await this.charitiesRepo.findById(id);
    }
     

       
}