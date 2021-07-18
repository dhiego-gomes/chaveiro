const services = require('../data.json')

exports.index = function (request, response) {
    return response.render('index', { services })
}