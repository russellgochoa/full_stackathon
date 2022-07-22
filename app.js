const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Coaster } = require('./models')
const { Park } = require('./models')
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)
// CONTROLLERS
//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//BRANDS POST REQUEST

// routes
app.get('/coaster', async (req, res) => {
  const coaster = await Coaster.find({})
  res.json(coaster)
})
app.get('/coaster/:id', async (req, res) => {
  const { id } = req.params
  const coaster = await Coaster.findById(id)
  res.json(coaster)
})

app.get('/park', async (req, res) => {
  const parks = await Park.find({})
  res.json(parks)
})

app.get('/park/:id', async (req, res) => {
  const { id } = req.params
  const parks = await Product.findById(id)
  res.json(parks)
})

// app.get('/', (req, res) => {
//   res.send('server base')
// })
app.post('/', (res, req) => {})
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
