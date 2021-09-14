import {Router} from "express";
import {CreateCarController} from "../../../../modules/cars/useCases/createCar/createCarController";
import {ensureAuthenticated} from "../middlewares/ensureAuthenticated";
import {ensureAdmin} from "../middlewares/ensureAdmin";
import {ListAvailableCarsController} from "../../../../modules/cars/useCases/listCars/ListAvailableCarsController";
import {CreateCarSpecificationController} from "../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import {UploadCarsImagesController} from "../../../../modules/cars/useCases/uploadCarImages/UploadCarsImagesController";
import multer from "multer";
import uploadConfig from '../../../../config/upload';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarsImagesController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle);

const uploadCarImages = multer(uploadConfig.upload("./tmp/cars/images"));
carsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, uploadCarImages.array("images"), uploadCarImagesController.handle);

export { carsRoutes }