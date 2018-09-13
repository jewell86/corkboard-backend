exports.up = function(knex, Promise) {
    return knex.schema.createTable('boards', table => {
      table.increments().notNullable()
      table.integer('added_by').notNullable()
      table.foreign('added_by').references('users.id').onDelete('CASCADE')
      table.string('title', 75).notNullable()
    //   table.text('description')
    //   table.string('img', 255)
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('boards')
  };
  