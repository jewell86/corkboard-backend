const db = require('../../knex')

function create(req, res, next) {
  return db('users_boards')
    .insert(req)
    .returning('*')
    .then(([result]) => result)
}

module.exports = { create }
