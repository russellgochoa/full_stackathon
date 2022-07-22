const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const PORT = process.env.PORT || 3001

const { Coaster } = require('./models')
const { Park } = require('./models')
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//BRANDS POST REQUEST

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
