import {inject, injectable} from "tsyringe";
import {IUsersTokensRepository} from "../../repositories/IUsersTokensRepository";
import {IDateProvider} from "../../../../shared/container/providers/DateProvider/IDateProvider";
import {sign, verify} from "jsonwebtoken";
import auth from "../../../../config/auth";
import {AppError} from "../../../../errors/appError";

interface IPayload {
    sub: string;
    email: string;
}

interface IResponse {
    token: string;
    refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute(token: string): Promise<IResponse> {
        const { email, sub: user_id } = verify(token, auth.secret_refresh_token) as IPayload;
        const userToken = await this.usersTokensRepository
            .findByUserIdAndRefreshToken(user_id, token);
        if (!userToken) {
            throw new AppError("Refresh token does not exists!")
        }
        await this.usersTokensRepository.deleteById(userToken.id);
        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: user_id, expiresIn: auth.expires_in_refresh_token
        })
        const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days, null)
        await this.usersTokensRepository.create({
            refresh_token, user_id, expires_date
        })
        const newToken = sign({}, auth.secret_token, {
            subject: user_id, expiresIn: auth.expires_in
        })
        return {
            token: newToken,
            refresh_token
        };
    }
}

export { RefreshTokenUseCase }