// Update with your config settings.
const dbConnection = process.env.DATABASE_URL; 

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/prisonerskills.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }

};
