import Head from 'next/head'

const App = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no' />
      <link rel='apple-touch-startup-image' href='/static/icon-512x512.png' />
      <link rel='apple-touch-icon' href='/static/icon-384x384' />
      <meta name='apple-mobile-web-app-title' content='HCB' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='blue' />
      <meta name='theme-color' content='white' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link rel='manifest' href='/static/manifest.json' />
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
          width: 100%;
          height: 100%;
          margin: 0;
          top: 0;
          overflow-x: hidden;
          overflow-y: hidden;
          background-color: white;
          font-family: 'Montserrat', sans-serif;
        }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          top: 0;
          box-sizing: border-box;
          overflow-y: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        #__next {
          height: 100%;
        }
        `}
      </style>
    </Head>
    <div className='content'>
      {props.children}
    </div>
    <style>{`
      .content {
        flex: 1;
        position: absolute;
        top: 69px;
        width: 100%;
        bottom: 0;
        padding-bottom: 56px;
        overflow-x: hidden;
        overflow-y: auto;
      }
    `}</style>
  </div>
)

export default App
