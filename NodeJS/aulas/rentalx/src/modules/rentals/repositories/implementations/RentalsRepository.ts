import {getRepository, Repository} from "typeorm";
import {Rental} from "../../infra/typeorm/Rental";
import {IRentalRepository} from "../IRentalRepository";
import {ICreateRentalDTO} from "../../dtos/ICreateRentalDTO";

class RentalsRepository implements IRentalRepository{
    private repository: Repository<Rental>;
    constructor() {
        this.repository = getRepository(Rental);
    }

    async create({
          user_id,
          car_id,
          expected_return_date,
          id,
          end_date,
          total,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            user_id,
            car_id,
            expected_return_date,
            id,
            end_date,
            total,
        });
        await this.repository.save(rental);
        return rental;
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const openedRentalWithCar = await this.repository.findOne({ where: { car_id, end_date: null }, });
        return openedRentalWithCar;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openedRentalWithUser = await this.repository.findOne({ where: { user_id, end_date: null }, });
        return openedRentalWithUser;
    }

    async findById(id: string): Promise<Rental> {
        return this.repository.findOne(id);
    }

    async findByUserId(user_id: string): Promise<Rental[]> {
        return this.repository.find({ where: { user_id }, relations: ["car"] });
    }

}

export { RentalsRepository }