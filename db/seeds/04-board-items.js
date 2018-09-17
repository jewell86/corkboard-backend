console.log('Seeding board_items')

exports.seed = function(knex, Promise) {
  return knex('board_items').insert([
    // { id: 1, type: "image", added_by: 1, link: "www", content: "stuffz", board_id: 1 },
    // { id: 2, type: "video", added_by: 1, link: "www", content: "stuffz", board_id: 1 },
    { id: 1, type: "note", added_by: 1,  content: "Here is  anoteeeeee", board_id: 1 },
    { id: 2, type: "list", added_by: 1,  content: "Here is  alist", board_id: 1 },


  ])
  .then(() => {
    return knex.raw(`SELECT setval('board_items_id_seq', (SELECT MAX(id) FROM board_items))`)
  })
}