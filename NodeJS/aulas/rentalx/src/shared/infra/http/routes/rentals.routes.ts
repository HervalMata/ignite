import {Router} from "express";
import {CreateRentalController} from "../../../../modules/rentals/useCases/createRental/CreateRentalController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {DevolutionRentalController} from "../../../../modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import {ListRentalsByUserController} from "../../../../modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUser = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, ensureAdmin, createRentalController.handle);
rentalRoutes.post("/devolution/:id", ensureAuthenticated, ensureAdmin, devolutionRentalController.handle);
rentalRoutes.get("/user", ensureAuthenticated, listRentalsByUser.handle);

export { rentalRoutes }