import {container} from "tsyringe";
import {Request, Response} from "express";
import {ListRentalsByUserUseCase} from "./ListRentalsByUserUseCase";

class ListRentalsByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id: user_id} = request.user;
        const listRentalsByUser = container.resolve(ListRentalsByUserUseCase);
        const rentals = await listRentalsByUser.execute({user_id});
        return response.status(200).json(rentals);
    }
}

export { ListRentalsByUserController }