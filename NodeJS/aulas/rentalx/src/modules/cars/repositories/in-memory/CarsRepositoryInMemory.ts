import {ICarsRepository} from "../ICarsRepository";
import {Car} from "../../infra/typeorm/entities/Car";
import {ICreateCarDTO} from "../../dtos/ICreateCarDTO";

class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[] = [];

    async create({name, description, daily_rate, license_plate, fine_amount, brand, category_id, specifications}: ICreateCarDTO): Promise<Car> {
        const car = new Car();
        Object.assign(car, {
            name, description, daily_rate, license_plate, fine_amount, brand, category_id, specifications,
        });
        this.cars.push(car);
        return car;
    }

    async findByLicensePLate(license_plate: string): Promise<Car> {
        return this.cars.find((car) => car.license_plate === license_plate);
    }

    async findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        return this.cars.filter((car) => {
            if (car.available === true &&
                (brand ? car.brand === brand : true) &&
                (name ? car.name === name : true) &&
                (category_id ? car.category_id === category_id : true)
            ) {
                return car;
            }
            return null;
        });
    }

    async findById(id: string): Promise<Car> {
        return this.cars.find((car) => car.id === id);
    }

}

export { CarsRepositoryInMemory };