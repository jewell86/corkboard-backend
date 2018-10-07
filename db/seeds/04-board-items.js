console.log('Seeding board_items')

exports.seed = function(knex, Promise) {
  return knex('board_items').insert([

  ])
  .then(() => {
    return knex.raw(`SELECT setval('board_items_id_seq', (SELECT MAX(id) FROM board_items))`)
  })
}