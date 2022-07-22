const mongoose = require('mongoose')
require('./.env').config()

mongoose
  .connect(
    `mongodb+srv://mahamakhan:${MY_PASS}@cluster0.tnubs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
//mongoose.set('debug, true')
const db = mongoose.connection

module.exports = db
