import 'reflect-metadata';
import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import {IUsersTokensRepository} from "../../repositories/IUsersTokensRepository";
import {IDateProvider} from "../../../../shared/container/providers/DateProvider/IDateProvider";
import {AppError} from "../../../../errors/appError";
import { v4 as uuidV4 } from "uuid";
import { resolve } from "path";
import {IMailProvider} from "../../../../shared/container/providers/MailProvider/IMailProvider";

@injectable()
class SendForgotPasswordMailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider,
        @inject("EtherealMailProvider")
        private mailProvider: IMailProvider
    ) {}
    async execute(email: string): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("User not found")
        }
        const expires_date = this.dateProvider.addHours(3, null);
        const token = uuidV4();
        await this.usersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        });
        const templatePath = resolve(
            __dirname, "..", "..", "views", "emails", "ForgotPassword.hbs"
        );
        const templateVariables = {
            name: user.name, link: `${process.env.FORGOT_MAIL_URL}${token}`,
        };

        await this.mailProvider.sendMail({
            to: user.email,
            subject: "Recuperação de senha",
            path: templatePath,
            // @ts-ignore
            variables: templateVariables
        })
    }
}

export { SendForgotPasswordMailUseCase }