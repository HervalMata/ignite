import {AppError} from "../../../../errors/appError";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {UsersRepositoryInMemory} from "../../repositories/in-memory/UsersRepositoryInMemory";
import {CreateUserUseCase} from "../createUser/createUserUseCase";
import {AuthenticateUserUseCase} from "../authenticateUser/authenticateUserUseCase";
import {DayJsDateProvider} from "../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import {UsersTokensRepositoryInMemory} from "../../repositories/in-memory/UsersTokensRepositoryInMemory";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayJsDateProvider;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        dateProvider = new DayJsDateProvider();
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    it('should be able to authenticate a user', async () => {
        const user: ICreateUserDTO = {
            driver_license: "00123",
            email: "user@test.com",
            name: "User Test",
            password: "1234",
        };
        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({
            email: user.email, password: user.password
        });
        expect(result).toHaveProperty("token");
    }, 50000);
    it('should not permit a nonexistent user to authenticate', async () => {
        await expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@test.com", password: "secret"
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it('should not be able to authenticate a user with incorrect password', async () => {
        await expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "00123",
                email: "user@test.com",
                name: "User Test",
                password: "1234",
            };
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: user.email, password: "incorrect"
            });
        }).rejects.toBeInstanceOf(AppError);
    });
})