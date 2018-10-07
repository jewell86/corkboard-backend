const express = require('express')
const app = express()
const { PORT = 5000, NODE_ENV = 'development' } = process.env
let Pusher = require('pusher');
let bodyParser = require('body-parser');
let pusher = new Pusher(require('./config.js'));

if (NODE_ENV === 'development') {
  require('dotenv').load()
  app.use(require('morgan')('dev'))
}

app.use(require('body-parser').json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')())

app.post('/update_text', function(req, res){
  var payload = {text: req.body.text, deviceId: req.body.from}
  pusher.trigger('Corkboard', 'text_update', payload)
  res.json({success: 200})
});

app.use('/', require('./routes/users'))

app.use((req, res, next) => {
  const status = 404
  const error = `Could not ${req.method} ${req.url}`
  next({ status, error })
})

app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)
  const message = `Something went wrong.`
  const { status = 500, error = message } = err
  res.status(status).json({ status, error })
})

if (NODE_ENV !== 'testing') {
  const listener = () => console.log(`Listening on port ${PORT}!`)
  app.listen(PORT, listener)
}

module.exports = app
