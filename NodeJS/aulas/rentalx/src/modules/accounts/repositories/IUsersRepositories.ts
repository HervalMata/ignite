import {ICreateUserDTO} from "@modules/accounts/dtos/ICreateUserDTO";
import {User} from "@modules/accounts/entities/User";


interface IUsersRepositories {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email:string): Promise<User>;
}

export { IUsersRepositories };