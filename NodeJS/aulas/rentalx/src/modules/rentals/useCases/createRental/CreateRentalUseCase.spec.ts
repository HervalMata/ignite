import {CreateRentalUseCase} from "./CreateRentalUseCase";
import {CarsRepositoryInMemory} from "../../../cars/repositories/in-memory/CarsRepositoryInMemory";
import {UsersRepositoryInMemory} from "../../../accounts/repositories/in-memory/UsersRepositoryInMemory";
import {RentalsRepositoryInMemory} from "../../repositories/in-memory/RentalsRepositoryInMemory";
import {AppError} from "../../../../errors/appError";
import dayjs from "dayjs";
import {DayJsDateProvider} from "../../../../shared/container/providers/DateProvider/implementations/DayJsDateProvider";

let createRentalUseCase: CreateRentalUseCase;
let carsRepository: CarsRepositoryInMemory;
let usersRepository: UsersRepositoryInMemory;
let rentalsRepository: RentalsRepositoryInMemory;
let dateProvider: DayJsDateProvider;

const mockCar = {
    name: "Name Car",
    description: "Description Car",
    daily_rate: 100,
    license_plate: "ABC-1234",
    fine_amount: 60,
    brand: "Brand",
    category_id: "category",
};

const mockUser = {
    name: "Herval",
    email: "hervalmataamparo@gmail.com",
    password: "1234",
    driver_license: "123456",
};

const dayAdd24hours = dayjs().add(25, "hours").toDate();

describe("Create Rental", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        usersRepository = new UsersRepositoryInMemory();
        rentalsRepository = new RentalsRepositoryInMemory();
        dateProvider = new DayJsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(
            rentalsRepository,
            carsRepository,
            usersRepository,
            dateProvider
        );

    });

    it('should be able to create a new rental', async () => {
        const user = await usersRepository.create(mockUser);
        const car = await carsRepository.create(mockCar);

        const rental = await createRentalUseCase.execute({
            user_id: user.id,
            car_id: car.id,
            expected_return_date: dayAdd24hours,
        });
        expect(rental).toHaveProperty("id");
    });

    it('should not be able to create a new rental if has another opened to the same user', async () => {
        await expect(async () => {
            const user = await usersRepository.create(mockUser);
            const car1 = await carsRepository.create(mockCar);
            mockCar.name = "another";
            const car2 = await carsRepository.create(mockCar);
            await createRentalUseCase.execute({
                user_id: user.id,
                car_id: car1.id,
                expected_return_date: dayAdd24hours,
            });
            await createRentalUseCase.execute({
                user_id: user.id,
                car_id: car2.id,
                expected_return_date: dayAdd24hours,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create a new rental if has another opened to the same car', async () => {
        await expect(async () => {
            const user1 = await usersRepository.create(mockUser);
            mockUser.name = "another user";
            const user2 = await usersRepository.create(mockUser);
            const car = await carsRepository.create(mockCar);
            await createRentalUseCase.execute({
                user_id: user1.id,
                car_id: car.id,
                expected_return_date: dayAdd24hours,
            });
            await createRentalUseCase.execute({
                user_id: user2.id,
                car_id: car.id,
                expected_return_date: dayAdd24hours,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create a new rental with duration less then 24 hours', async () => {
        await expect(async () => {
            const user = await usersRepository.create(mockUser);
            const car = await carsRepository.create(mockCar);
            await createRentalUseCase.execute({
                user_id: user.id,
                car_id: car.id,
                expected_return_date: new Date(),
            });
        }).rejects.toBeInstanceOf(AppError);
    });
})