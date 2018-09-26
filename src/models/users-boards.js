const db = require('../../knex')

function addUser(boards_id, users_id ) {

    db('users_boards')
      .where({ boards_id, users_id })
      .then(function(rows){
          if (rows.length===0) {
          return db('users_boards').insert({ users_id, boards_id })      
          } else {
            console.log('we hit else')
            throw('fuck off boiiii')
          }
      })
      .catch('fuck off boiiii')

}

function getAllUsers(boards_id) {
  return db('users_boards')
    .where({ boards_id })
}

function removeUser(boards_id, users_id) {
  return db('users_boards')
    .where({ boards_id , users_id })
    .del()
}
    


module.exports = { addUser, getAllUsers, removeUser }
