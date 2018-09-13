console.log('Seeding users_boards')

exports.seed = function(knex, Promise) {
    return knex('users_boards').insert([
      { id: 1, users_id: 1, boards_id: 1 },
      { id: 2, users_id: 1, boards_id: 2 },
      { id: 3, users_id: 1, boards_id: 3 },
      { id: 4, users_id: 1, boards_id: 4 },
      { id: 5, users_id: 1, boards_id: 5 },
      { id: 6, users_id: 2, boards_id: 6 },
      { id: 7, users_id: 2, boards_id: 7 },
      { id: 8, users_id: 2, boards_id: 8 },
      { id: 9, users_id: 2, boards_id: 9 },
      { id: 10, users_id: 2, boards_id: 2 },
      { id: 11, users_id: 1, boards_id: 7 },
      { id: 12, users_id: 1, boards_id: 9 },
    ])
    .then(() => {
      return knex.raw(`SELECT setval('users_boards_id_seq', (SELECT MAX(id) FROM users_boards))`)
    })
  }