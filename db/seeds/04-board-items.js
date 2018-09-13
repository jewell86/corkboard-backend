console.log('Seeding board_items')

exports.seed = function(knex, Promise) {
  return knex('board_items').insert([
    { id: 1, title: 1, added_by: 1, link: "www", content: "stuffz", board_id: 1 },
  ])
  .then(() => {
    return knex.raw(`SELECT setval('board_items_id_seq', (SELECT MAX(id) FROM board_items))`)
  })
}