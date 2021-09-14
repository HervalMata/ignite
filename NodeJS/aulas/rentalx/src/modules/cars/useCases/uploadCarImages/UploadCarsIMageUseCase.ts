import {inject, injectable} from "tsyringe";
import {CarsImagesRepository} from "../../repositories/Implementations/CarsImagesRepository";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarsIMageUseCase {
    constructor(
        @inject("CarsImagesRepository")
        private carsImagesRepository: CarsImagesRepository
    ) {
    }

    async execute({ images_name, car_id }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.carsImagesRepository.create(car_id, image);
        })
    }
}

export { UploadCarsIMageUseCase }