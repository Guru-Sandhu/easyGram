// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'easygram',
      username: 'guru',
      password: 'Sandhu@123'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migration'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
