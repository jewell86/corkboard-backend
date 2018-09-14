const db = require('../../knex')

function addUser(body) {
  console.log(body)
  return db('users_boards')
    .insert(body)
    .returning('*')
    .then(([result]) => result)
}

module.exports = { addUser }
