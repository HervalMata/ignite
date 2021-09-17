import {Router} from "express";
import {SendForgotPasswordMailController} from "../../../../modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import {ResetUsersPasswordController} from "../../../../modules/accounts/useCases/resetUsersPassword/ResetUsersPasswordController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetUsersPasswordController = new ResetUsersPasswordController();

passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);
passwordRoutes.post("/reset", resetUsersPasswordController.handle);

export { passwordRoutes };