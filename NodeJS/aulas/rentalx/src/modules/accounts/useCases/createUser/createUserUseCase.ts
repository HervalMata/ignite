import {inject, injectable} from "tsyringe";
import {UsersRepository} from "../../repositories/implementations/UsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {

    }
    async execute({name, username, password, email, driver_license}: ICreateUserDTO): Promise<void > {
        await this.usersRepository.create({
            name, username, password, email, driver_license
        })
    }
}

export { CreateUserUseCase }