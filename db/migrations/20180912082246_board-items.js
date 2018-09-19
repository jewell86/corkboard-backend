
exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_items', table => {
    table.increments()
    table.string('type', 75).notNullable()
    table.integer('added_by').notNullable()
    table.foreign('added_by').references('users.id')
    table.string('link', 1000)
    table.string('content')
    table.integer('board_id').notNullable()
    // table.foreign('board_id').references('boards.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('board_items')
};



