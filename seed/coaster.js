const db = require('../db')
const { Coaster } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const coasters = [
    {
      name: "Falcon's Flight",
      park: 'Six Flags Qiddiya',
      type: 'Magnetic launch coaster',
      drop: '525 ft'
    },

    {
      name: 'Kingda Ka',
      park: 'Six Flags Great Adventure',
      type: 'Hydraulic launch rocket coaster',
      drop: '418 ft'
    }
  ]

  await Coaster.insertMany(coasters)
  console.log('Created coasters!')
}
const run = async () => {
  await main()
  db.close()
}

run()
