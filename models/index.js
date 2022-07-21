const mongoose = require('mongoose')
const coasterSchema = require('./coaster')
const parkSchema = require('./Park')

const Product = mongoose.model('Coaster', coasterSchema)
const Brand = mongoose.model('Park', parkSchema)

module.exports = {
  Coaster,
  Park
}
