import {Request, Response} from "express";
import {ListSpecificationsUseCase} from "../listSpecifications/ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {
    }

    handle(request: Request, response: Response): Response {
        const all = this.listSpecificationUseCase.execute();

        return response.json(all);
    }
}

export { ListSpecificationsController };