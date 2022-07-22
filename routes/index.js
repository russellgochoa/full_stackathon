const { Router } = require('express')
const controllers = require('../controllers/CoastControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/coaster', controllers.createCoaster)

module.exports = router
