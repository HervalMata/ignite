import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {User} from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository{
    users: User[] = [];

    async create({name, password, email, driver_license, avatar}: ICreateUserDTO): Promise<User> {
        const user = new User();
        Object.assign(user, {
            name, password, email, driver_license, avatar,
        })
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

    async getAll(): Promise<User[]> {
        return this.users;
    }

}

export { UsersRepositoryInMemory }