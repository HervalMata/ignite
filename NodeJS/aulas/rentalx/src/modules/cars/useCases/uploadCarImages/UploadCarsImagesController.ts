import { Request, Response } from "express";
import {container} from "tsyringe";
import {UploadCarsIMageUseCase} from "./UploadCarsIMageUseCase";

interface IFiles {
    filename: string;
}

class UploadCarsImagesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const images = request.files as IFiles[];
        const fileNames = images.map((file) => file.filename);
        const uploadCarImageUseCase = container.resolve(UploadCarsIMageUseCase);
        await uploadCarImageUseCase.execute({
            car_id: id, images_name: fileNames,
        });
        return response.status(201).send();
    }
}

export { UploadCarsImagesController }