import {Router} from "express";
import {CreateCarController} from "../../../../modules/cars/useCases/createCar/createCarController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListAvailableCarsController} from "../../../../modules/cars/useCases/listCars/ListAvailableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes }