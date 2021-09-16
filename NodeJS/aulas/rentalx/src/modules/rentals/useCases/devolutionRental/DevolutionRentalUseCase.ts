import {inject, injectable} from "tsyringe";
import {IRentalRepository} from "../../repositories/IRentalRepository";
import {ICarsRepository} from "../../../cars/repositories/ICarsRepository";
import {IDateProvider} from "../../../../shared/container/providers/DateProvider/IDateProvider";
import {AppError} from "../../../../errors/appError";
import {Rental} from "../../infra/typeorm/Rental";

interface IRequest {
    id: string;
    user_id: string;
}

@injectable()
class DevolutionRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider
    ) {}
    async execute({ id, user_id }: IRequest): Promise<Rental> {
        const rental = await this.rentalsRepository.findById(id);
        if (!rental) {
            throw new AppError("Rental does not exists");
        }
        const car = await this.carsRepository.findById(rental.car_id);
        const dateNow = await this.dateProvider.dateNow();
        const minDaily = 1;
        let total = 0;
        let daily = this.dateProvider.compareInDays(
            dateNow, rental.start_date
        );
        if (daily <= 0) daily = minDaily;
        const delay = this.dateProvider.compareInDays(dateNow, rental.expected_return_date)
        if (delay > 0) {
            const totalFineAmount = delay * car.fine_amount;
            total += totalFineAmount;
        }
        total += daily * car.daily_rate;
        rental.end_date = dateNow;
        rental.total = total;
        await this.rentalsRepository.create(rental);
        await this.carsRepository.updateAvailability(car.id, true);
        return rental;
    }
}

export { DevolutionRentalUseCase }