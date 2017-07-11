import Head from 'next/head'
import Logo from '../Logo'
import Nav from '../Nav'
import Divider from 'react-md/lib/Dividers'
import Social from '../Social'
import {Visible} from 'react-grid-system'
import MobileNav from '../Nav/mobileNav'

const App = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>Once Pueblos</title>
      <link rel='apple-touch-startup-image' href='/static/icon-512x512.png' />
      <link rel='apple-touch-icon' href='/static/icon-384x384' />
      <link rel='shortcut icon' href='/static/favicon.png' type='image/x-icon' />
      <meta name='apple-mobile-web-app-title' content='HCB' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='blue' />
      <meta name='theme-color' content='white' />
      <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Lustria' rel='stylesheet' />
      <link rel='manifest' href='https://pekubstudio.github.io/oncepueblos/static/manifest.json' />
      <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' />
      <style>
        {`.leaflet-container {
          height: 100%;
          width: 100%;
        }
        .leaflet-container a {
          color: #2d517b;
          text-decoration: none;
          font-size: 15px;
          font-family: 'Montserrat', sans-serif;
        }
        .leaflet-control-attribution a {
          display:none;
        }
        body{
          background-color: white;
          min-height: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: white;
        }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          padding-bottom: 25px;
        }
        #__next {
          height: 100%;
        }
        `}
      </style>
    </Head>
    <div className='page'>
      <Logo />
      <Visible xs sm>
        <MobileNav />
      </Visible>
      <div className='content'>
        {props.children}
      </div>
      <Visible md lg xl>
        <Nav />
      </Visible>
      <Visible md lg xl>
        <div className='divider'>
          <Divider style={{border: 0, borderTop: '1px solid #cccccc'}} />
        </div>
      </Visible>
      <Social />
      <style jsx>
        {`
          .content {
            margin-left: auto;
            margin-right: auto;
            display:  block
            width: 100%;
          }
          .divider {
            width: 25%;
            margin: auto;
            padding-top: 14px;
            position: relative;
          }
          .page {
            height: 100%;
            min-height: 100%;
          }
        `}
      </style>
    </div>
  </div>
)

export default App
