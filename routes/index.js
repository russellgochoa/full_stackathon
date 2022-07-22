const { Router } = require('express')
const controllers = require('../controllers/CoastControllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/coaster', controllers.createCoaster)
router.get('./park', controllers.createCoaster)

module.exports = router
