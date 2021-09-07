import {CategoriesRepository} from "../../repositories/Implementations/CategoriesRepository";
import {ListCategoriesUseCase} from "../listCategories/ListCategoriesUseCase";
import {ListCategoriesController} from "../listCategories/ListCategoriesController";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };