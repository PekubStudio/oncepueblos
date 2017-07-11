export default () => (
  <a href='/'>
    <div className='logo-banner'>
      <img alt='logo-oncepueblos' src='/static/logo-once-pueblos.png' className='img-logo' />
      <style>
        {`
          .img-logo {
            width: 100%;
            height: 100%;
          }
          .logo-banner {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 173px;
            height: 62px;
            margin-top: 25px;
            margin-bottom: 25px;
          }
        `}
      </style>
    </div>
  </a>
)
