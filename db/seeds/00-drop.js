console.log('Dropping tables if they exist')

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('boards').del())
    .then(() => knex('users_boards').del())
    .then(() => knex('board_items').del())
s
    .then(() => console.log(`Done clearing tables`)
    )
}
