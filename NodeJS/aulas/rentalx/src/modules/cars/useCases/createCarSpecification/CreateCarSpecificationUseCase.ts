import {ICarsRepository} from "../../repositories/ICarsRepository";
import {AppError} from "../../../../errors/appError";
import {ISpecificationsRepository} from "../../repositories/ISpecificationsRepository";
import {Car} from "../../infra/typeorm/entities/Car";
import {inject, injectable} from "tsyringe";

interface IRequest {
    car_id: string;
    specifications_ids: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository
    ) {}

    async execute({ car_id, specifications_ids }: IRequest): Promise<Car> {
        const car = await this.carsRepository.findById(car_id);
        if (!car) {
            throw new AppError("Car does not exists");
        }
        const specifications = await this.specificationRepository.findByIds(specifications_ids);
        if (specifications.length === 0) {
            throw new AppError("Can not find specifications");
        }
        car.specifications = specifications;
        await this.carsRepository.create(car);
        return car;
    }
}

export { CreateCarSpecificationUseCase }