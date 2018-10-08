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
  const boardId = req.params.boardId
  const response = await model.deleteOne(boardId)
  res.json({ response })
}

async function addItem(req, res, next) {
  const type = req.body.itemType
  const added_by = req.body.added_by
  const link = req.body.link
  const content = req.body.content
  const board_id = req.body.board_id
  const webpage_url = req.body.webpage_url
  const location = req.body.location
  const response = await model.addItem( 
    type, 
    added_by, 
    link, 
    content, 
    board_id,
    webpage_url,
    location
    )
  res.json({ response })
}

async function updateItem(req, res, next) {
  const content = req.body.content
  const id = req.body.id
  const response = await model.updateItem( 
    content, 
    id
    )
  res.json({ response })
}

async function updatePosition(req, res, next) {
  const content = req.body.position
  const id = req.body.id
  const response = await model.updatePosition( 
    content, 
    id
    )
  res.json({ response })
}

async function deleteItem(req, res, next) {
  const id = req.params.itemId
  const response = await model.deleteItem(id)
  res.json({ response })

}

async function updateOne(req, res, next) {
  const boardId = req.params.boardId
  const content = req.body.title
  const response = await model.updateOne(boardId, content)
  res.json({ response })
}

module.exports = {
  getOne,
  getAll,
  createOne,
  deleteOne,
  addItem,
  updateItem,
  updatePosition,
  deleteItem,
  updateOne,
}
