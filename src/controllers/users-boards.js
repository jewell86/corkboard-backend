const model = require('../models/users-boards')



async function getAllUsers(req, res, next) {
  try {
    const boards_id = req.params.boardId
    const response = await model.getAllUsers(boards_id)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not get all users' })
  }
}

async function addUser(req, res, next) {
  try {
    const boards_id = req.params.boardId
    const users_id = parseInt(req.body.id)
    const response = await model.addUser(boards_id, users_id)
    res.status(201).json({ response })
  } catch (e) {
    console.log('in catch of add user ', e)
    next({ status: 400, error: String(e) || 'Could not add user to board' })
  }
}

async function removeUser(req, res, next) {
  try {
    const boards_id = req.params.boardId
    const users_id = req.params.userId
    const response = await model.removeUser(boards_id, users_id)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not delete user from board' })
  }
}

module.exports = { addUser, getAllUsers, removeUser }