exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_boards', table => {
      table.increments().notNullable()
      table.integer('users_id').notNullable()
      table.foreign('users_id').references('users.id').onDelete('CASCADE')
      table.integer('boards_id').notNullable()
      table.foreign('boards_id').references('boards.id').onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_boards')
  };