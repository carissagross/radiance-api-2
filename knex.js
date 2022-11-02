const knex = require('knex')
const config = require('./knexfile')
const environment = 'deployment'
const knexConfig = config[environment]
module.exports = knex(knexConfig)