import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository} from "../../modules/cars/repositories/Implementations/CategoriesRepository";
import {ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationsRepository";
import {SpecificationsRepository} from "../../modules/cars/repositories/Implementations/SpecificationsRepository";
import {IUsersRepositories} from "../../modules/accounts/repositories/IUsersRepositories";
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepositories>("UsersRepository", UsersRepository);