const knex = require('knex');//busca o knex
const configuration = require('../../knexfile');//busca a config

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;//verefica qual ambiente esta rodando

const connection = knex(config);//cria a conn

module.exports = connection;//exporta a conn