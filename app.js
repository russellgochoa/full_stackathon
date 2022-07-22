const cors = require('cors')
const logger = require('morgan')
const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const app = express()

// CODE STARTS HERE
app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' })
})

// CODE ENDS HERE

//MIDDLEWARE
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)
// CONTROLLERS
//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// ROUTES

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
