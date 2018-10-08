
exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_items', table => {
    table.increments()
    table.string('type', 75).notNullable()
    table.integer('added_by').notNullable()
    table.string('link', 1000)
    table.string('content')
    table.integer('board_id').notNullable()
    table.string('webpage_url', 2000)
    table.string('location', 100)
    table.integer('position').notNullable()

    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('board_items')
};



