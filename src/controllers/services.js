const services = require('../services.json')
const reviews = require('../reviews.json')

exports.index = function (request, response) {
    return response.render('index', { services, reviews })
}