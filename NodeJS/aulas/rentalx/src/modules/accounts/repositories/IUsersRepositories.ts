import {ICreateUserDTO} from "@modules/accounts/dtos/ICreateUserDTO";


interface IUsersRepositories {
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepositories };