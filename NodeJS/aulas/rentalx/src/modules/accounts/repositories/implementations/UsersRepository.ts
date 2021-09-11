import { IUsersRepositories } from "../IUsersRepositories";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {getRepository, Repository} from "typeorm";
import {User} from "../../entities/User";

class UsersRepository implements IUsersRepositories{
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const { name, password, email, driver_license } = data;
        const user = this.repository.create({
            name, password, email, driver_license,
        })
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});
        return user;
    }

}

export { UsersRepository }