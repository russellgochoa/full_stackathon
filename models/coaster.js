const { Schema } = require('mongoose')

const coasterSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    drop: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = coasterSchema
