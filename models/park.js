const { Schema } = require('mongoose')

const parkSchema = new Schema(
  {
    name: { type: String, required: true },
    park: { type: Schema.Types.ObjectId, ref: 'Coaster' }
  },
  { timestamps: true }
)

module.exports = parkSchema
