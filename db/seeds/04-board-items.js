console.log('Seeding board_items')

exports.seed = function(knex, Promise) {
  return knex('board_items').insert([
    { id: 1, type: "note", added_by: 1,  content: "This is a cute love note", board_id: 1 },
    { id: 3, type: "webpage", added_by: 1, link: "www.google.com",  content: "Its google", board_id: 1 },
    { id: 4, type: "note", added_by: 1,  content: "Here is  a list one to three four five", board_id: 1 },


  ])
  .then(() => {
    return knex.raw(`SELECT setval('board_items_id_seq', (SELECT MAX(id) FROM board_items))`)
  })
}