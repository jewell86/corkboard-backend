const router = require('express').Router()
const ctrl = require('../controllers/boards')
const auth = require('../lib/auth')

// router.get('/', ctrl.getAll) 

// router.post('/', auth.isLoggedIn, ctrl.create)
// router.patch('/:tutorialId', auth.isAuthorized, ctrl.update)
// router.delete('/:tutorialId', auth.isAuthorized, ctrl.destroy)

module.exports = router