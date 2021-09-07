import {SpecificationsRepository} from "../../repositories/Implementations/SpecificationsRepository";
import {ListSpecificationsUseCase} from "../listSpecifications/ListSpecificationsUseCase";
import {ListSpecificationsController} from "../listSpecifications/ListSpecificationsController";

const categoriesRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(categoriesRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };