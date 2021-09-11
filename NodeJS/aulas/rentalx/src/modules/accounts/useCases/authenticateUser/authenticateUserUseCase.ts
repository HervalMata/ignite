import {inject, injectable} from "tsyringe";
import {UsersRepository} from "../../repositories/implementations/UsersRepository";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import {AppError} from "../../../../errors/appError";


interface IIrequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {
    }
    async execute({ email, password }: IIrequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password incorrect!");
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }
        const token = sign({}, "4ddeab45c6c0fd549b5913377c0f2f52", {
            subject: user.id, expiresIn: "1d"
        });
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        }
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }