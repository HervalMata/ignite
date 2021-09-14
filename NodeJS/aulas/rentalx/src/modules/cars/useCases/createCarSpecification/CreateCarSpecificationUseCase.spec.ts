import {CreateCarSpecificationUseCase} from "./CreateCarSpecificationUseCase";
import {CarsRepositoryInMemory} from "../../repositories/in-memory/CarsRepositoryInMemory";
import {AppError} from "../../../../errors/appError";
import {SpecificationsRepositoryInMemory} from "../../repositories/in-memory/SpecificationsRepositoryInMemory";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationsRepositoryInMemory;

const mockCar = {
    name: "Name Car",
    description: "Description Car",
    daily_rate: 100,
    license_plate: "ABC-1234",
    fine_amount: 60,
    brand: "Brand",
    category_id: "category",
};

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationRepositoryInMemory = new SpecificationsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory, specificationRepositoryInMemory
        );
    })

    it('should be able to add a new specification to a car', async () => {
        const specifications_ids = [];
        const car = await carsRepositoryInMemory.create(mockCar);
        for (let i = 0; i <= 1; i++) {
            specificationRepositoryInMemory.create({
                name: `Specification ${i - 1}`,
                description: `Specification Test ${i - 1}`,
            }).then((specification) => {
                specifications_ids.push(specification.id);
            });
        }
        const specificationsCars = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_ids,
        });
        expect(specificationsCars.specifications).toHaveLength(2);
    });

    it('should not be able to add a new specification to a not existent car', async () => {
        await expect(async () => {
            const car_id = "123";
            const specifications_ids = ["456", "789"];
            await createCarSpecificationUseCase.execute({
                car_id: car_id,
                specifications_ids,
            });
        }).rejects.toBeInstanceOf(AppError);

    });

    it('should not be able to add a not existent specification to a car', async () => {
        await expect(async () => {
            const car = await carsRepositoryInMemory.create(mockCar);
            const specifications_ids = ["456", "789"];
            await createCarSpecificationUseCase.execute({
                car_id: car.id,
                specifications_ids,
            });
        }).rejects.toBeInstanceOf(AppError);

    });
});