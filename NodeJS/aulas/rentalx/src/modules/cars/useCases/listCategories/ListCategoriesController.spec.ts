import {Connection, createConnection} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import {hash} from "bcryptjs";
import request from "supertest";
import {app} from "../../../../app";

let connection: Connection;

describe("List Category Controller", () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
        const id = uuidV4();
        const password = await hash("admin", 10);
        await connection.query(`
            INSERT INTO USERS(
                id, name, email, password, "isAdmin", driver_license, created_at
            ) values (
                '${id}', 'admin', 'admin@rentalx.com.br', '${password}', true, 'license-admin', 'now()'      
            )
        `);
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it('should be able to list all Categories', async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@rentalx.com.br",
            password: "admin",
        });
        const { token } = responseToken.body;
        await request(app)
            .post("/categories").send({
                name: "Category Test",
                description: "Category Test",
            }).set({
                Authorization: `Bearer ${token}`,
            });
        const response = await request(app).get("/categories");
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty("id");
    });

});