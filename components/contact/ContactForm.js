import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'

const ContactForm = () => (
  <div className='wrapper'>
    <div className='text-container'>
      <h2 className='text'>Contactanos</h2>
    </div>
    <Container className='contactForm'>
      <MuiThemeProvider>
        <div>
          <TextField
            hintText={<span className='label'>Nombre</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Correo</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Telefono</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Mensaje</span>}
            fullWidth
            multiLine
            rows={2}
        /><br />
          <div className='button-form'>
            <RaisedButton
              label={<span style={{color: 'white'}}>Send</span>}
              labelPosition='before'
              primary={false}
              backgroundColor='#2d517b'
              style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width: 300, marginTop: 20, marginBottom: 20}}
          />
          </div>
        </div>
      </MuiThemeProvider>
      <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6764.532793955342!2d-116.64006800000001!3d32.03498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9551f0a71d3ef5ea!2sOnce+Pueblos!5e0!3m2!1ses-419!2smx!4v1499128547005' width='100%' height='450' frameborder='0' allowfullscreen />
    </Container>
    <style jsx>
      {`
        .wrapper{
          padding-top: 15px;
        }

        .text{
          text-align: center;
          color: #2d517b;
          font-size: 16px;
          margin-left: auto;
          margin-right: auto;
          display: block;
          font-family: 'Montserrat', sans-serif;
        }

        .label {
          color: #2d517b !important;
          background-image: none !important;
          font-family: 'Montserrat', sans-serif;
        }

        .img-container {
          margin-right: auto;
          display: block;
          width: 128px;
          height: 128px;
          margin-left: auto;
        }

        .contactForm {
          padding-top: 15px;
        }

        .img {
          margin-left: auto;
          margin-right: auto;
          display: bock;
        }

        .text-container {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }

        .button-form {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }

      `}
    </style>
  </div>
)

export default ContactForm
