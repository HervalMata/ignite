import {SpecificationsRepository} from "../../repositories/Implementations/SpecificationsRepository";
import {CreateSpecificationUseCase} from "../createSpecification/CreateSpecificationUseCase";
import {CreateSpecificationController} from "../createSpecification/CreateSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };