// const knex = require( 'knex')
// const config = require('./knexfile')
// const environment = process.env.NODE_ENV || 'development'
// const knexConfig = config[environment];
// module.exports = knex(knexConfig);

require("dotenv").config()
const knex = require( 'knex')
const config = require('./knexfile')

// const environment = 'development'
const environment = process.env.NODE_ENV || 'development'
const knexConfig = config[environment];
module.exports = knex(knexConfig);