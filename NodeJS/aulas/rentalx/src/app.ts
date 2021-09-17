import 'reflect-metadata';
import express, { Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import "express-async-errors";

import './shared/infra';
import {router} from "./shared/infra/http/routes";
import createConnection from "../src/shared/infra/typeorm";
import swaggerFile from "./swagger.json";
import {AppError} from "./errors/appError";
import path from "path";

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use("/api-coverage", express.static(path.resolve(
    __dirname, "..", "coverage", "lcov-report"
)));
app.get("/api-coverage", (request: Request, response: Response) => {
    return response.sendFile(path.resolve(
        __dirname, "..", "coverage", "lcov-report", "index.html"
    ));
});
app.use(router);

export { app };

