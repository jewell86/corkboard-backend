exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_boards', table => {
      table.increments().notNullable()
      table.integer('users_id').notNullable()
      table.integer('boards_id').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_boards')
  };