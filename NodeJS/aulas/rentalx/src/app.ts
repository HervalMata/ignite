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

export { app };

