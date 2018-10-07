exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments()
      table.string('first_name', 75).notNullable()
      table.string('last_name', 75).notNullable()
      table.string('username', 50).notNullable()
      table.string('email', 75).notNullable()
      table.string('password', 75).notNullable()
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };
