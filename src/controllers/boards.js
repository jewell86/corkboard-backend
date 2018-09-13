const model = require('../models/boards')
const { parseToken } = require('../lib/auth')


async function getOne(req, res, next) {
    const response = await model.getOne(req.params.boardId)
    res.json({ response })
}

async function getAll(req, res, next) {
  const response = await model.getAll(req.params.userId)
  res.json({ response })
}

module.exports = {
  getOne,
  getAll
}
