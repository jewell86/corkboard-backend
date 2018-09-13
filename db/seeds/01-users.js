const bcrypt = require('bcryptjs')
console.log('Seeding Users')

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    
    { id: 1, first_name: 'Jewell', last_name: 'White', username: 'jewell', email: 'jewellsmailbox@gmail.com', password: bcrypt.hashSync('jewell', 8) },
    { id: 2, first_name: 'Kyle', last_name: 'Braden', username: 'kyle', email: 'kylebraden@gmail.com', password: bcrypt.hashSync('kyle', 8) },

])
.then(() => {
  return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
})
}