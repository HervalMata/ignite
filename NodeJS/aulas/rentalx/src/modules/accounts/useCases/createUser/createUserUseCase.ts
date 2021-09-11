import {inject, injectable} from "tsyringe";
import {UsersRepository} from "../../repositories/implementations/UsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import { hash } from "bcryptjs";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {

    }
    async execute({name, password, email, driver_license}: ICreateUserDTO): Promise<void > {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new Error("User Already exists");
        }
        const passwordHash = await hash(password, 10);
        await this.usersRepository.create({
            name, password: passwordHash, email, driver_license
        })
    }
}

export { CreateUserUseCase }