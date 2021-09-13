import {CarsRepositoryInMemory} from "../../repositories/in-memory/CarsRepositoryInMemory";
import {AppError} from "../../../../errors/appError";
import {CreateCarUseCase} from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

const mockCar = {
    name: "Name Car",
    description: "Description Car",
    daily_rate: 100,
    license_plate: "ABC-1234",
    fine_amount: 60,
    brand: "Brand",
    category_id: "category",
};

describe("Create Car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepository);
    })
    it('should be able to create a new car', async () => {
        const car = await createCarUseCase.execute(mockCar);
        expect(car).toHaveProperty("id");
    });
    it('should be able to create a new car as available by default', async () => {
        const car = await createCarUseCase.execute(mockCar);
        expect(car.available).toBe(true);
    });
    it('should not be able to create a new car with license_plate in use', async () => {
        await expect(async () => {
            await createCarUseCase.execute(mockCar);
            await createCarUseCase.execute(mockCar);
        }).rejects.toBeInstanceOf(AppError);
    });
})