const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {

    beforeEach(async () => {
        //await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it('should be able to create a new Incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set("Authorization", "163f9f00")
            .send({
                title: "Ajude a casa dos dogs",
                description: "A casa dos dogs presta socorre...",
                value: 10000
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBeGreaterThanOrEqual(1);
    });


    it('should be able to call a Incident', async () => {
        const response = await request(app)
            .get('/incidents');

        expect(response.status).toBe(200);
        expect.arrayContaining(response.body);
    });

    afterAll(async () => {
        await connection.destroy();
    });
});