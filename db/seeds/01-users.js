const bcrypt = require('bcryptjs')
console.log('Seeding Users')

exports.seed = function(knex, Promise) {
  return knex('users').insert([

])
.then(() => {
  return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
})
}