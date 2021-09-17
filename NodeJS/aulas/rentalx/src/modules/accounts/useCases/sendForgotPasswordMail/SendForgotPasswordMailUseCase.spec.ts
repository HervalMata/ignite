import {SendForgotPasswordMailUseCase} from "./SendForgotPasswordMailUseCase";
import {UsersRepositoryInMemory} from "../../repositories/in-memory/UsersRepositoryInMemory";
import {UsersTokensRepositoryInMemory} from "../../repositories/in-memory/UsersTokensRepositoryInMemory";
import {DayJsDateProvider} from "../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import {MailProviderInMemory} from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import {AppError} from "../../../../errors/appError";
import spyOn = jest.spyOn;

let sendForgotMailPasswordUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let mailProvider: MailProviderInMemory;

describe("SendForgotPasswordMail", () => {
    beforeEach(async () => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        dateProvider = new DayJsDateProvider();
        mailProvider = new MailProviderInMemory();
        sendForgotMailPasswordUseCase = new SendForgotPasswordMailUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider,
            mailProvider
        );
    });

    it('should be able to send a email for a user to reset his password', async () => {
        const sendMail = spyOn(mailProvider, "sendMail");
        await usersRepositoryInMemory.create({
            driver_license: "134513356",
            email: "teste@teste.com",
            name: "User Test",
            password: "test",
        });
        await sendForgotMailPasswordUseCase.execute("teste@teste.com");
        expect(sendMail).toHaveBeenCalled();
    });

    it('should not be able to send a email for a non existent user', async () => {
        const sendMail = spyOn(mailProvider, "sendMail");
        await expect(sendForgotMailPasswordUseCase.execute("xpto@teste.com")).rejects.toBeInstanceOf(AppError);
        expect(sendMail).not.toBeCalled();
    });

    it('should be able to create a new token to reset password', async () => {
        const generateToken = spyOn(usersTokensRepositoryInMemory, "create");
        await usersRepositoryInMemory.create({
            driver_license: "134513356",
            email: "teste@teste.com",
            name: "User Test",
            password: "test",
        });
        await sendForgotMailPasswordUseCase.execute("teste@teste.com");
        expect(generateToken).toHaveBeenCalled();
    });
})

