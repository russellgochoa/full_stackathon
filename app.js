const cors = require('cors')
const logger = require('morgan')
const express = require('express')
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

// CONTROLLERS

// ROUTES

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
