const mongoose = require('mongoose')
const CoasterSchema = require('./coaster')
const ParkSchema = require('./park')

const Coaster = mongoose.model('Coaster', CoasterSchema)
const Park = mongoose.model('Park', ParkSchema)

module.exports = {
  Coaster,
  Park
}
