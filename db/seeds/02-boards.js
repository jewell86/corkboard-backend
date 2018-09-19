console.log('Seeding Boards')

exports.seed = function (knex, Promise) {
  return knex('boards').insert([
    { id: 1, added_by: 1, title: 'My First Board!' },
    { id: 2, added_by: 1, title: 'Jewells Shared Board' },
    { id: 3, added_by: 1, title: 'Jewells Board' },
    { id: 4, added_by: 1, title: 'Grocery Lists' },
    { id: 5, added_by: 1, title: 'Its a board' },
    { id: 6, added_by: 2, title: 'This Board' },
    { id: 7, added_by: 2, title: 'Kyles Shared Board' },
    { id: 8, added_by: 2, title: 'My Board' },
    { id: 9, added_by: 2, title: 'Another Shared Board from Kyle' },

])
.then(() => {
  return knex.raw(`SELECT setval('boards_id_seq', (SELECT MAX(id) FROM boards))`)
})
}