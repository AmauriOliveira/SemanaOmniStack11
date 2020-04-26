const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Ong', () => {

    beforeEach(async () => {
       // await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set("Authorization","IDVALIDO DE ONG")
            .send({
                name: "Amar é o bicho",
                email: "55555@email.com",
                whatsapp: "+5516991880766",
                city: "Ibaté",
                uf: "SP"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);;

    });

    afterAll(async () => {
        await connection.destroy();
    });
});
//53//