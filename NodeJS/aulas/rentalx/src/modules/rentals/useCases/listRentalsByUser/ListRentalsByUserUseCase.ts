import {injectable, inject} from "tsyringe";
import {IRentalRepository} from "../../repositories/IRentalRepository";
import {Rental} from "../../infra/typeorm/Rental";

interface IRequest {
    user_id: string;
}

@injectable()
class ListRentalsByUserUseCase {
        constructor(
            @inject("RentalsRepository")
            private rentalsRepository: IRentalRepository
        ) {}
        async execute({ user_id }: IRequest): Promise<Rental[]> {
            const rentals = await this.rentalsRepository.findByUserId(user_id);
            return rentals;
        }
}

export { ListRentalsByUserUseCase }