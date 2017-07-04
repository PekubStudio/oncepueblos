import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container, Col, Row} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'

const ContactForm = () => (
  <div className='wrapper'>
    <Container className='contactForm'>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <MuiThemeProvider>
            <div>
              <div className='text-container'>
                <h2 className='text'>Contáctanos</h2>
              </div>
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
                  label={<span style={{color: 'white'}}>Enviar</span>}
                  labelPosition='before'
                  primary={false}
                  backgroundColor='black'
                  style={{width: 180, marginTop: 20, marginBottom: 20}}
              />
              </div>
            </div>
          </MuiThemeProvider>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding: 0}}>
          <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6764.532793955342!2d-116.64006800000001!3d32.03498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9551f0a71d3ef5ea!2sOnce+Pueblos!5e0!3m2!1ses-419!2smx!4v1499128547005' width='100%' height='388' frameborder='0' allowfullscreen style={{border: 0}} />
        </Col>
      </Row>
    </Container>
    <style jsx>
      {`
        .wrapper{
          max-width: 875px;
          margin-left: auto;
          margin-right: auto;
          display: block;
          background-color: #fbfaf8;
          max-height: 388px;
        }

        .text{
          text-align: left;
          color: black;
          font-size: 27px;
          font-family: Lustria !important;
          font-weight: 400;
          text-transform: uppercase;
        }

        .label {
          color: black !important;
          background-image: none !important;
          font-family: Lustria !important;
          font-size: 14px !important;
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
          left: 0;
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
