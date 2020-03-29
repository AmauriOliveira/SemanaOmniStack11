const knex = require('knex');//busca o knex
const configuration = require('../../knexfile');//busca a config

const connection = knex(configuration.development);//cria a conn

module.exports = connection;//exporta a conn