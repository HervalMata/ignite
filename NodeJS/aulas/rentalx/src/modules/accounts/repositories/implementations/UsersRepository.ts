import {getRepository, Repository} from "typeorm";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {User} from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(data: ICreateUserDTO): Promise<User> {
        const { name, password, email, driver_license, id, avatar } = data;
        const user = this.repository.create({
            name, password, email, driver_license, id, avatar
        })
        await this.repository.save(user);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async getAll(): Promise<User[]> {
        return await this.repository.find();
    }

}

export { UsersRepository }