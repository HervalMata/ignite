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
import {IRentalRepository} from "../../modules/rentals/repositories/IRentalRepository";
import {RentalsRepository} from "../../modules/rentals/repositories/implementations/RentalsRepository";
import {IUsersTokensRepository} from "../../modules/accounts/repositories/IUsersTokensRepository";
import {UsersTokensRepository} from "../../modules/accounts/repositories/implementations/UsersTokensRepository";
import {IDateProvider} from "../container/providers/DateProvider/IDateProvider";
import {DayJsDateProvider} from "../container/providers/DateProvider/implementations/DayJsDateProvider";
import {IMailProvider} from "../container/providers/MailProvider/IMailProvider";
import {EtherealMailProvider} from "../container/providers/MailProvider/implementations/EtherealMailProvider";



container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", CarsImagesRepository);
container.registerSingleton<IRentalRepository>("RentalsRepository", RentalsRepository);
container.registerSingleton<IUsersTokensRepository>("UsersTokensRepository", UsersTokensRepository);
container.registerSingleton<IDateProvider>("DayJsDateProvider", DayJsDateProvider);
container.registerInstance<IMailProvider>("EtherealMailProvider", new EtherealMailProvider());