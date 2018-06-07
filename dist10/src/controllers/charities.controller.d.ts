import { CharityRepository } from '../repositories/charities.repository';
import { Charity } from '../models/charities';
export declare class CharityController {
    private charitiesRepo;
    constructor(charitiesRepo: CharityRepository);
    getAllCharities(): Promise<Array<Charity>>;
    findCharitiesById(id: number): Promise<Charity>;
}
