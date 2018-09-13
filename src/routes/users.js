const router = require('express').Router()
const usersCtrl = require('../controllers/users')
const boardsCtrl = require('../controllers/boards')

const auth = require('../lib/auth')
//USER ROUTES
router.post('/register', usersCtrl.register) 
router.post('/login', usersCtrl.login)  
router.get('/auth/token', auth.parseToken)

//BOARD ROUTES
router.get('/:userId/main', boardsCtrl.getAll)
router.get('/:userId/:boardId', boardsCtrl.getOne) 


module.exports = router
