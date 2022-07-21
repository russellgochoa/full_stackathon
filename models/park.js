const { Schema } = require('mongoose')

const ParkSchema = new Schema(
  {
    name: { type: String, required: true },
    park: { type: Schema.Types.ObjectId, ref: 'Coaster' }
  },
  { timestamps: true }
)

module.exports = ParkSchema
