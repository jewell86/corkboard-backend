console.log('Seeding users_boards')

exports.seed = function(knex, Promise) {
    return knex('users_boards').insert([
 
    ])
    .then(() => {
      return knex.raw(`SELECT setval('users_boards_id_seq', (SELECT MAX(id) FROM users_boards))`)
    })
  }