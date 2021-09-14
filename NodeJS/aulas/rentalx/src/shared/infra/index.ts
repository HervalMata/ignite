import { container } from "tsyringe";
import {UsersRepository} from "../../modules/accounts/repositories/implementations/UsersRepository";
import {IUsersRepository} from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository} from "../../modules/cars/repositories/Implementations/CategoriesRepository";
import {ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationsRepository";
import {SpecificationsRepository} from "../../modules/cars/repositories/Implementations/SpecificationsRepository";
import {ICarsRepository} from "../../modules/cars/repositories/ICarsRepository";
import {CarsRepository} from "../../modules/cars/repositories/Implementations/CarsRepository";
import {ICarsImagesRepository} from "../../modules/cars/repositories/ICarsImagesRepository";
import {CarsImagesRepository} from "../../modules/cars/repositories/Implementations/CarsImagesRepository";



container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", CarsImagesRepository);