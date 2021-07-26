const express = require('express')
const route = express.Router()
const controllers = require('./controllers/services')
const nodemailer = require('nodemailer')

require('dotenv').config()

route.get('/', controllers.index)

route.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        cc: req.body.email,
        replyTo: req.body.email,
        subject: `Mensagem de Gomes Chaveiro`,
        html: `
            <h4>Essa é uma cópia da mensagem enviada pelo site gomeschaveiro.com.br:</h4>
            <p><strong>Nome:</strong> ${req.body.name}</p> 
            <p><strong>Telefone:</strong> ${req.body.phone}</p> 
            <p><strong>Mensagem:</strong> ${req.body.message}</p>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error')
        } else {
            console.log('E-mail enviado' + info.response)
            res.send('success')
        }
    })
})

module.exports = route