const model = require('../models/users-boards')

async function create(req, res, next) {
  try {
    const response = await model.create(req.body)
    res.status(201).json({ response })
  } catch (e) {
    next({ status: 400, error: String(e) || 'Could not add tutorial to watchlist' })
  }
}

module.exports = { create }