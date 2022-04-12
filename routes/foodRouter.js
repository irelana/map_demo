// add our router
const express = require('express')
const foodRouter = express.Router()

// express-validator, to validate user data in forms
const expressValidator = require('express-validator')

// connect to controller
const foodController = require('../controllers/foodController.js')

// process routes by calling controller functions
foodRouter.get('/', (req, res) => foodController.getAllFoods(req, res))
foodRouter.get('/foods/:id', (req, res) => foodController.getOneFood(req, res))
foodRouter.post('/search', expressValidator.body('foodName').isAlpha().optional({checkFalsy: true}), (req, res) => foodController.searchFoods(req, res))  // includes validation of user input

// export the router
module.exports = foodRouter
