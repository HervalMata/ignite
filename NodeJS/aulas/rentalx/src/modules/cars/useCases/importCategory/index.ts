import {ImportCategoryController} from "../importCategory/ImportCategoryController";
import {ImportCategoryUseCase} from "../importCategory/ImportCategoryUseCase";
import {CategoriesRepository} from "../../repositories/Implementations/CategoriesRepository";

const categoriesRepositories = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositories);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export { importCategoryController };