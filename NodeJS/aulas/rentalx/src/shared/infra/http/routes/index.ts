import {Router} from 'express';
import {authenticateRoutes} from "./authenticate.route";
import {categoriesRoutes} from "./categories.routes";
import {specificationsRoutes} from "./specifications.routes";
import {usersRoutes} from "./users.router";
import {carsRoutes} from "./cars.routes";


const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/cars", carsRoutes);

export { router };