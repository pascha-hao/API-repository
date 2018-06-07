import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { post, get, requestBody, param } from '@loopback/rest';
import { User } from '../models/user'; 
import { Login } from '../models/login';

export class UserController { 
    constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

    @post('/users')
    async createUser(@requestBody() user: User) {
        return await this.userRepo.create(user);
    }

    @get('/users')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }

    @get('/user/{id}')
    async findUsersById(@param.path.number('id') id: number): Promise<User> {
        return await this.userRepo.findById(id);
    }

    @get('/users/{user_id}/donations')
    async getDonationsByUserId(
        @param.path.number('user_id') userId: number,
        @param.query.date('date_from') dateFrom: Date
    ) {
        console.log(userId);
        console.log(dateFrom);
    
    }

    @post("/login")
    async login(@requestBody() login: Login) {
        var users = await this.userRepo.find({
            where: {
                email:login.email
            }
        });
        var username = login.username;
        var password = login.password;
        var i;

        // loop through users array and find a match based on email and password
        for (i=0; i< users.length; i++) {
            var user = users[i];
            //if match return user:
            if (user.username == username && user.password == password) {
                return user;
            }
        }
        return "ERROR";
    }



       
}

