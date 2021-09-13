import {inject, injectable} from "tsyringe";
import {ICarsRepository} from "../../repositories/ICarsRepository";
import {AppError} from "../../../../errors/appError";
import {Car} from "../../infra/typeorm/entities/Car";

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {
    }
    async execute({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: IRequest): Promise<Car> {
        const carAlreadyExists = await this.carsRepository.findByLicensePLate(license_plate);
        if (carAlreadyExists) {
            throw new AppError("Car Already exists");
        }
        const car = await this.carsRepository.create({
            name, description, daily_rate, license_plate, fine_amount, brand, category_id
        });
        return car;
    }
}

export { CreateCarUseCase }