
exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_items', table => {
    table.increments()
    table.string('title', 75).notNullable()
    table.integer('added_by').notNullable()
    table.foreign('added_by').references('users.id').onDelete('CASCADE')  
    table.string('link', 200)
    table.string('content')
    table.integer('board_id').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('board_items')
};



