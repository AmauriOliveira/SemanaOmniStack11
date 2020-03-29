const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whattapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        //await pede para o node esperar um tempo mas tem de ser async
        await connection('ongs').insert({
            id,
            name,
            email,
            whattapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};