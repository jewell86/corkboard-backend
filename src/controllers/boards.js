const model = require('../models/boards')
const { parseToken } = require('../lib/auth')


async function getOne(req, res, next) {
    const response = await model.getOne(req.params.boardId, req.params.userId)
    res.json({ response })
}

async function getAll(req, res, next) {
  const response = await model.getAll(req.params.userId)
  res.json({ response })
}

async function createOne(req, res, next) {
  const userId = req.params.userId
  const title = req.body.title
  const response = await model.createOne(userId, title)
  res.json({ response })
}

async function deleteOne(req, res, next) {
  const userId = req.params.userId
  const boardId = req.body.boardId
  const response = await model.deleteOne(userId, boardId)
  res.json({ response })
}

module.exports = {
  getOne,
  getAll,
  createOne,
  deleteOne
}
