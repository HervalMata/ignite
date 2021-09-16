import {ICarsRepository} from "../ICarsRepository";
import {Car} from "../../infra/typeorm/entities/Car";
import {ICreateCarDTO} from "../../dtos/ICreateCarDTO";
import {getRepository, Repository} from "typeorm";

class CarsRepository implements ICarsRepository{
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({id, name, description, daily_rate, license_plate, fine_amount, brand, category_id, specifications}: ICreateCarDTO): Promise<Car> {
        // @ts-ignore
        const car = this.repository.create({
            id, name, description, daily_rate, license_plate, fine_amount, brand, category_id, specifications,
        });
        await this.repository.save(car);
        return car;
    }

    async findByLicensePLate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({license_plate});
        return car;
    }

    async findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository.createQueryBuilder("c")
            .where("c.available = :available", { available: true});
        if (brand) {
            carsQuery.andWhere("c.brand = :brand", { brand });
        }
        if (name) {
            carsQuery.andWhere("c.name = :name", { name });
        }
        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id });
        }
        const cars = await carsQuery.getMany();
        return cars;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne(id);
        return Promise.resolve(undefined);
    }

    async updateAvailability(car_id: string, availability: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({available: availability})
            .where("id = :car_id")
            .setParameters({ car_id })
            .execute();
        return Promise.resolve(undefined);
    }

}

export { CarsRepository };