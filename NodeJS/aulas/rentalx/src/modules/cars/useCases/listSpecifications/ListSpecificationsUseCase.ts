import {ISpecificationsRepository} from "../../repositories/ISpecificationsRepository";
import {Specification} from "../../entities/Specification";
import {inject, injectable} from "tsyringe";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("ISpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) {
    }

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.list();
        return specifications;
    }
}

export { ListSpecificationsUseCase };