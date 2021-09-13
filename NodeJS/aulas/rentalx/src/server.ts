import 'reflect-metadata';
import express, {NextFunction, Request, Response} from "express";
import swaggerUI from "swagger-ui-express";
import "express-async-errors";

import './shared/infra';
import {router} from "./shared/infra/http/routes";
import createConnection from "../src/shared/infra/typeorm";
import swaggerFile from "./swagger.json";
import {AppError} from "./errors/appError";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction): Response => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error: ${err.message}`,
        });
    });

app.listen(3333, () => console.log("Server is Runnning!"));