const db = require('../../knex')

function getOne(boardId, userId) {
  try {
    return db('boards')
    .where({ 'boards.id': boardId })
    .join('board_items', 'board_items.board_id', 'boards.id')
  } catch(e) {
    throw new Error(e)
  }
}

function addItem(
  type, 
  added_by, 
  link, 
  content, 
  board_id,
  webpage_url, 
  location) {
  try {
    return db('board_items')
    .insert({  type, added_by, link, content, board_id, webpage_url, location })
    .returning('*')
    .then(([ response ]) => response)
  } catch(e) {
    throw new Error(e)
  }
}

function getAll(userId) {
  try {
    return db('users_boards')
    .where({ users_id: userId })
    .join('boards', 'boards.id', 'users_boards.boards_id')
  } catch(e) {
    throw new Error(e)
  }
}

function createOne(userId, title) {
  try {
    return db('boards')
    .insert({'added_by': userId, 'title': title})
    .returning('*')
    .then(([response]) => {
      return db('users_boards')
      .insert({'users_id': userId, 'boards_id': response.id})
      .then((secondResponse) => {
        return response
      })
    })
  } catch(e) {
    throw new Error(e)
  }
}

function deleteOne(boardId) {
  try{
  return db('boards')
    .where({ id: boardId })
    .del()
    .returning('*')
    .then(([response]) => response)
  } catch(e) {
    throw new Error(e)
  }
}

function updateItem(content, id) {
  try {
    return db('board_items')
    .where({ id: id })
      .update({
        'content': content
      })
      .returning('*')
      .then(([response]) => response)
  } catch(e) {
    throw new Error(e)
  }
}

function deleteItem(id) {
  try {
    return db('board_items')
    .where({ id })
    .del()
    .returning('*')
    .then(([response]) => response)
  } catch(e) {
    throw new Error(e)
  }  
}

function updateOne(boardId, content) {
  try {
    return db('boards')
      .where({ id: boardId})
      .update({ 'title': content })
      .returning('*')
      .then(([response]) => response)
  } catch(e) {
    throw new Error(e)
  }
}

module.exports = {
  getOne, 
  getAll,
  createOne,
  deleteOne,
  addItem,
  updateItem,
  deleteItem,
  updateOne,
}

