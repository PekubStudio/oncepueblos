const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')

const nodemailer = require('nodemailer');

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.post('/test', (req, res) => {
    const { name, email, phone, message } = req.body
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'saulpolo95@gmail.com', // Your email id
            pass: 'poloboy1' // Your password
        }
    })
    var mailOptions = {
        from: 'saulpolo95@gmail.com', // sender address
        to: 'jorgeduartefreelance@gmail.com', // list of receivers
        subject: `Email from ${name}`, // Subject line
        text: `Phone: ${phone}, email: ${email} message: ${message}` //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        }
    })

  })

  server.get('*', (req, res) => {
    handle(req, res)
  })
  server.listen(3000)
})
