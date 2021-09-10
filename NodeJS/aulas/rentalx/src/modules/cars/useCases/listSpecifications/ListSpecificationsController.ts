import {Request, Response} from "express";
import {ListSpecificationsUseCase} from "./ListSpecificationsUseCase";
import {container} from "tsyringe";

class ListSpecificationsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const  listSpecificationUseCase = container.resolve(ListSpecificationsUseCase)

        const all = await listSpecificationUseCase.execute();

        return response.json(all);
    }
}

export { ListSpecificationsController };