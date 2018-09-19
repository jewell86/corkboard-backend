const db = require('../../knex')

function getOne(boardId, userId) {
  return db('boards')
    .where({ 'boards.id': boardId })
    .join('board_items', 'board_items.board_id', 'boards.id')
    // .then(([response]) => {
      // return response
      // try {
      //   if (!board) return {}
      //   return { board }
      // } catch (e) {
      //   throw new Error(e)
      // }
    // })
}

function addItem(
  type, 
  added_by, 
  link, 
  content, 
  board_id) {
  return db('board_items')
    .insert({  type, added_by, link, content, board_id })
    .returning('*')
    .then(([ response ]) => response)
}

function getAll(userId) {
    return db('users_boards')
    .where({ users_id: userId })
    .join('boards', 'boards.id', 'users_boards.boards_id')
}

function createOne(userId, title) {
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
}

// async function addURLsToTutorials(tutorial, id) {
//   try {
//     var urls = await db('contents').select('url').where('contents.tutorials_id', id)
//     urls = urls.map(urlObj => urlObj = urlObj.url)
//     tutorial["urls"] = urls
//     return commentsModel.getAll(id)
//       .then(comments => {
//         return { tutorial, comments }
//       })
//   } catch (e) {
//     throw new Error(e)
//   }
// }

// function find(id) {
//   return db('tutorials').where({ id }).first()
// }

// function create(body) {
//   return db('tutorials')
//     .insert(body)
//     .returning('*')
//     .then(([response]) => response)
// }

// function update(id, body) {
//   return find(id).then(response => {
//     return db('tutorials')
//       .update({
//         ...response,
//         ...body,
//         updated_at: new Date()
//       })
//       .where({ id })
//       .returning('*')
//       .then(([response]) => response)
//   })
// }

// function destroy(id) {
//   return db('tutorials')
//     .where({ id })
//     .del()
//     .returning('*')
//     .then(([response]) => response)
// }

// function getMyTutorials(userId) {
//   return db('users_tutorials')
//     .where({ 'users_tutorials.users_id' : userId })
//     .join('tutorials', 'tutorials.id', 'users_tutorials.tutorials_id')
// }

// function getMyCreatedTutorials(userId) {
//   return db('tutorials')
//     .where({ users_id: userId })
// }

module.exports = {
  getOne, 
  getAll,
  createOne,
  addItem
}

