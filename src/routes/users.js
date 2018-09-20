const router = require('express').Router()
const usersCtrl = require('../controllers/users')
const boardsCtrl = require('../controllers/boards')
const usersBoardsCtrl = require('../controllers/users-boards')

const auth = require('../lib/auth')
//USER ROUTES
router.post('/register', usersCtrl.register) 
router.post('/login', usersCtrl.login)  
router.get('/auth/token', auth.parseToken)

//BOARD ROUTES
router.get('/:userId/main', boardsCtrl.getAll)
router.get('/:userId/:boardId', boardsCtrl.getOne) 
router.post('/:userId', boardsCtrl.createOne)
router.delete('/:userId', boardsCtrl.deleteOne)

//USER_BOARDS ROUTES
router.post('/:userId/addUser', usersBoardsCtrl.addUser)

//BOARD ITEM ROUTES
router.post('/:userId/addItem', boardsCtrl.addItem)
router.patch('/updateItem', boardsCtrl.updateItem)

module.exports = router
