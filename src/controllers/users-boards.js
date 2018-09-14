const model = require('../models/users-boards')

async function addUser(req, res, next) {
  console.log(req.body)
  try {
    const response = await model.addUser(req.body)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not add user to board' })
  }
}

module.exports = { addUser }