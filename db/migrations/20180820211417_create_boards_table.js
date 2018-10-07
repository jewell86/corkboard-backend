exports.up = function(knex, Promise) {
    return knex.schema.createTable('boards', table => {
      table.increments().notNullable()
      table.integer('added_by').notNullable()
      table.string('title', 75).notNullable()
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('boards')
  };
  