import { hash } from "bcryptjs";
import {inject, injectable} from "tsyringe";
import {AppError} from "../../../../errors/appError";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {IUsersRepository} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {

    }
    async execute({name, password, email, driver_license}: ICreateUserDTO): Promise<void > {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User Already exists");
        }
        const passwordHash = await hash(password, Number(process.env.DEFAULT_HASH_SALT));
        await this.usersRepository.create({
            name, password: passwordHash, email, driver_license
        })
    }
}

export { CreateUserUseCase }