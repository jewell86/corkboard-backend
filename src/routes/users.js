const router = require('express').Router()
const usersCtrl = require('../controllers/users')
const boardsCtrl = require('../controllers/boards')
const usersBoardsCtrl = require('../controllers/users-boards')
console.log("here")
const auth = require('../lib/auth')

//USER ROUTES
router.post('/register', usersCtrl.register) 
router.post('/login', usersCtrl.login)  
router.get('/auth/token', auth.parseToken)
router.get('/byUsername/:username', usersCtrl.getByUsername)
router.get('/byId/:userId', usersCtrl.getById)
router.get('/getAll', usersCtrl.getAll)
//ADD AUTH TO deleteUser/:userId
router.post('/deleteUser/:userId', usersCtrl.deleteOneUser)
router.patch('/updateUser/:userId', usersCtrl.updateUser)

router.post('/addItem', boardsCtrl.addItem)


//USER_BOARDS ROUTES
router.get('/:boardId/getAllUsers', usersBoardsCtrl.getAllUsers)
router.post('/:boardId/addUser', usersBoardsCtrl.addUser)
router.delete('/:boardId/:userId/removeUser', usersBoardsCtrl.removeUser)

//BOARD ROUTES
router.get('/:userId/main', boardsCtrl.getAll)
router.get('/:userId/:boardId', boardsCtrl.getOne) 
router.post('/:userId', boardsCtrl.createOne)
router.delete('/:boardId/deleteBoard', boardsCtrl.deleteOne)
router.patch('/:boardId/renameBoard', boardsCtrl.updateOne)

//BOARD ITEM ROUTES 
router.patch('/updateItem', boardsCtrl.updateItem)
router.delete('/deleteItem', boardsCtrl.deleteItem)

module.exports = router
