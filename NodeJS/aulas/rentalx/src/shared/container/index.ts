import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository} from "../../modules/cars/repositories/Implementations/CategoriesRepository";
import {ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationsRepository";
import {SpecificationsRepository} from "../../modules/cars/repositories/Implementations/SpecificationsRepository";

// @ts-ignore
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
// @ts-ignore
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);