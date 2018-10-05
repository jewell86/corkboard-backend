const model = require('../models/users')
const auth = require('../lib/auth')

async function register(req, res, next) {
  try {
    const response = await model.register(req.body)
    const userId = response.id
    const token = auth.createToken(userId)
    console.log(token)
    res.status(201).json({ token: token, user_id: userId })
  } catch (e) {
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login(req, res, next) {  
  try {
    const response = await model.login(req.body)
    const userId = response.id
    const token = auth.createToken(userId)
    res.status(201).json({ token: token, user_id: userId })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

async function getByUsername(req, res, next) {
  console.log("users controller")
  try {
    const username = req.params.username
    const response = await model.getByUsername(username)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 401, error: `Could not get by username` })
  }
}

async function getById(req, res, next) {
  try {
    const userId = req.params.userId
    const response = await model.getById(userId)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 401, error: `Could not get by id` })
  }
}

async function deleteOneUser(req, res, next) {
 try {
  const userId = req.params.userId
  const response = await model.deleteOneUser(userId)
  const reply = await model.deleteUserBoards(userId)
  res.status(201).json({ response })
 } catch (e) {
  next({ status: 401, error: `Could not delete user` })
 }
}

async function updateUser(req, res, next) {
  try {
    const userId = req.params.userId
    const body = req.body
    const response = await model.updateUser(userId, body)
    res.status(201).json({ response })
  } catch(e) {
    next({ status: 401, error: `Could not update user` })

  }
}

async function getAll(req, res, next) {
  try {
    const response = await model.getAll()
    res.status(201).json({ response })
  } catch(e) {
    next({ status: 401, error: `Could not get all users` })
  } 
}

module.exports = {
  register, 
  login,
  getByUsername,
  getById,
  deleteOneUser,
  updateUser,
  getAll

}
