import { inject, injectable } from "tsyringe";
import {ICategoriesRepository} from "../../repositories/ICategoriesRepository";
import {AppError} from "../../../../errors/appError";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) {
    }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        console.log(name)
        if (categoryAlreadyExists) {
            throw new AppError("Category Already exists!");
        }

        await this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase };