const express = require('express')
const route = express.Router()
const controllers = require('./controllers/services')

route.get('/', controllers.index)

module.exports = route