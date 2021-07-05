const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    return response.render('index')
})

app.listen(3000, () => console.log('Server running on PORT 3000.'))