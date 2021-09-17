import {Connection, createConnection} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import {hash} from "bcryptjs";
import request from "supertest";
import {app} from "../../../../app";

let connection: Connection;

const userData = {
    email: "admin@rentalx.com.br",
    password: "admin"
}

const jestTimeoutInMS = 50 * 1000;

describe("Create Category Controller", () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
        const id = uuidV4();
        const hashPassword = await hash(userData.password, 10);
        await connection.query(`
            INSERT INTO USERS(
                id, name, email, password, "isAdmin", driver_license, created_at
            ) values (
                '${id}', 'admin', '${userData.email}', '${hashPassword}', true, 'license-admin', 'now()'      
            )
        `);
    }, jestTimeoutInMS);

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it('should be able to create a Category', async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: userData.email,
            password: userData.password,
        });
        const { token } = responseToken.body;
        const response = await request(app)
            .post("/categories").send({
                name: "Category Test",
                description: "Category Test",
            }).set({
                Authorization: `Bearer ${token}`,
            });
        expect(response.status).toBe(201);
    }, jestTimeoutInMS);

    it('should not be able to create a Category with exactly name as before', async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: userData.email,
            password: userData.password,
        });
        const { token } = responseToken.body;
        const response = await request(app)
            .post("/categories").send({
                name: "Category Test",
                description: "Category Test",
            }).set({
                Authorization: `Bearer ${token}`,
            });
        expect(response.status).toBe(400);
    }, jestTimeoutInMS);
})