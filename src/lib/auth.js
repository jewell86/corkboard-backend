const { SECRET_KEY } = process.env
const { sign, verify } = require('jsonwebtoken')
const db = require('../../knex')

function createToken (id) {
  const sub = { sub: { id } }
  const options = { expiresIn: '10 day' }
  return sign(sub, SECRET_KEY, options)
}

function parseToken (header) {
  const token = header && header.split('Bearer ')[1]
  return verify(token, SECRET_KEY)
}

function isLoggedIn (req, res, next) {
  try {
    parseToken(req.headers.authorization)
    next()
  } catch (e) {
    next({
      status: 401,
      error: `Incorrect or missing token.`
    })
  }
}

async function isAuthorized (req, res, next) {
  try {
    const authorization = req.headers.authorization
    if (!authorization) {
      const message = `You are not authorized to access this route`
      return next({ status: 401, error: message })
    }
    next()
  } catch (e) {
    next({
      status: 401,
      error: `You are not authorized to access this route.`
    })
  }
}

module.exports = {
  createToken,
  parseToken,
  isLoggedIn,
  isAuthorized
}
