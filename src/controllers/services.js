const services = require('../services.json')

exports.index = function (request, response) {
    return response.render('index', { services })
}