console.log('Seeding Boards')

exports.seed = function (knex, Promise) {
  return knex('boards').insert([


])
.then(() => {
  return knex.raw(`SELECT setval('boards_id_seq', (SELECT MAX(id) FROM boards))`)
})
}