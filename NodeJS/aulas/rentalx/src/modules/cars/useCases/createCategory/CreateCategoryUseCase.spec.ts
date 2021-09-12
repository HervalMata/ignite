import {AppError} from "../../../../errors/appError";
import {CategoriesRepositoryInMemory} from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import {CreateCategoryUseCase} from "./CreateCategoryUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;


describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });
    it('should be able to create a category', async () => {
        const newCategory = {
            name: "Category Test",
            description: "Category description Test",
        };
        await createCategoryUseCase.execute(newCategory);
        const categoryCreated = await categoriesRepositoryInMemory.findByName(newCategory.name);
        expect(categoryCreated).toHaveProperty("id");
    });
    it('should not be able to create a existing category by name', async () => {
        await expect(async () => {
            const newCategory = {
                name: "Category Test",
                description: "Category description Test",
            };
            await createCategoryUseCase.execute(newCategory);
            await createCategoryUseCase.execute(newCategory);
        }).rejects.toBeInstanceOf(AppError);
    });
});