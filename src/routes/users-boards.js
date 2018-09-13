const router = require('express').Router({ mergeParams: true })

const ctrl = require('../controllers/users-boards')
const auth = require('../lib/auth')

router.post('/', auth.isAuthorized, ctrl.create)

module.exports = router