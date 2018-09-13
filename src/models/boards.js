const db = require('../../knex')

function getOne(id) {
  return db('boards')
    .select('id', 'users_id', 'title' )
    .where({ id }).first()
    .then(async board => {
      try {
        if (!board) return {}
        // const comments = await commentsModel.getAll(id)
        // const rating = await ratingsModel.avgRating(id)
        // tutorial.avg_rating = rating ? rating.avg : null
        // var urls = await db('contents').select('url').where('contents.tutorials_id', id)
        // urls = urls.map(urlObj => urlObj = urlObj.url)
        // tutorial["urls"] = urls
        // return { tutorial, comments }
        return { board }
      } catch (e) {
        throw new Error(e)
      }
    })
}

function getAll(userId) {
    return db('users_boards')
    // .select('*')
    .where({ users_id: userId })
    .join('boards', 'boards.id', 'users_boards.boards_id')
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
  getAll
}

