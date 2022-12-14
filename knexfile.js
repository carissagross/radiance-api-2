// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      database: 'radiance_api',
      user:     process.env.DB_USER,
      password: 'Hike9829'
    },
  },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // },
    production: {
      client: 'postgresql',
      connection: {
        connectionString: process.env.DATABASE_URL, 
        ssl: {
        rejectUnauthorized: false,
      },
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }
    

