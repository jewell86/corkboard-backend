const path = require('path')
require('dotenv').load()

const config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  }
}

module.exports = {
  production: config,
  development: config
}