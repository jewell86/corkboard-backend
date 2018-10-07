const db = require('../../knex')

function addUser(boards_id, users_id ) {
  try {
    db('users_boards')
    .where({ boards_id, users_id })
    .then(function(rows){
      if (rows.length===0) {
        return db('users_boards').insert({ users_id, boards_id })      
      } 
    })
  } catch(e) {
    throw new Error(e)
  }
}

function getAllUsers(boards_id) {
  try {
    return db('users_boards')
    .where({ boards_id })
  } catch(e) {
    throw new Error(e)
  }
}

function removeUser(boards_id, users_id) {
  try {
    return db('users_boards')
    .where({ boards_id , users_id })
    .del()
  } catch(e) {
    throw new Error(e)
  }
}
  
module.exports = { 
  addUser, 
  getAllUsers, 
  removeUser 
}
