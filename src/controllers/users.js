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

module.exports = {
  register, 
  login,

}
