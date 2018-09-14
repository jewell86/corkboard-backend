const { promisify } = require('util')
const db = require('../../knex')
const bcrypt = require('bcryptjs')

async function register(body) {
 const first_name = body.first_name
 const last_name = body.last_name
 const username = body.username
 const email = body.email
 const password = body.password
 const hashed = await promisify(bcrypt.hash)(password, 8)
 try{
  return db('users')
    .insert({ first_name, last_name, username, email, password: hashed })
    .returning('*')
    .then(([response]) => response)
 } catch(e) {
   throw new Error(e)
 }
}

function login({ username, password }) {
  try {
    return db('users')
    .where({ username })
    .then(async ([user]) => {
      if (!user) throw new Error()
      const isValid = await promisify(bcrypt.compare)(password, user.password)
      if (!isValid) throw new Error()
      return user
    })
  } catch(e) {
    throw new Error(e)
  }
}

async function myProfile(id) {
  try {
    return await db('users').where({ id })
  } catch(e) {
    throw new Error(e)
  }  
}

module.exports = {
  register, 
  login,
  myProfile
}
