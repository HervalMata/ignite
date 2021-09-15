import {IRentalRepository} from "../../repositories/IRentalRepository";
import {ICarsRepository} from "../../..//cars/repositories/ICarsRepository";
import {IUsersRepository} from "../../../accounts/repositories/IUsersRepository";
import {Rental} from "../../infra/typeorm/Rental";
import {AppError} from "../../../../errors/appError";
import {IDateProvider} from "../../../../shared/container/providers/DateProvider/IDateProvider";
import {inject, injectable} from "tsyringe";


interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider
    ) {
    }

    async execute({
        user_id, car_id, expected_return_date
    }: IRequest): Promise<Rental> {
        const car = await this.carsRepository.findById(car_id);
        if (!car) {
            throw new AppError("Car not found")
        }
        const user = await this.usersRepository.findById(user_id);
        if (!user) {
            throw new AppError("User not found")
        }
        const carIsUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
        if (carIsUnavailable) {
            throw new AppError("Car is not available")
        }
        const userOccupied = await this.rentalsRepository.findOpenRentalByUser(user_id);
        if (userOccupied) {
            throw new AppError("There's a rental in progress for the user")
        }
        const compare = this.dateProvider.compareInHours(this.dateProvider.dateNow(), expected_return_date);
        const rentalMinDurationHours = 24;
        if (compare < rentalMinDurationHours) {

            throw new AppError(`A rental must have at least ${rentalMinDurationHours} hours of duration`);
        }
        const rental = await this.rentalsRepository.create({
            user_id,
            car_id,
            expected_return_date
        });

        return rental;
    }
}

export { CreateRentalUseCase }