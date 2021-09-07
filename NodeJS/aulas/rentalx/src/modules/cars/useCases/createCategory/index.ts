import {CategoriesRepository} from "../../repositories/Implementations/CategoriesRepository";
import {CreateCategoryUseCase} from "../createCategory/CreateCategoryUseCase";
import {CreateCategoryController} from "../createCategory/CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };