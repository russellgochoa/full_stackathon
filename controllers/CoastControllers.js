const Coaster = require('../models')

const createCoaster = async (req, res) => {
  try {
    const coaster = await new Coaster(req.body)
    await coaster.save()
    return res.status(201).json({
      coaster
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCoasters = async (req, res) => {
  try {
    const coasters = await Coaster.find()
    return res.status(200).json({ coasters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCoaster,
  getAllCoasters
}
