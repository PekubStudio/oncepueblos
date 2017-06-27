export default () => (
  <div className='logo-banner'>
    <img id='logo' src='/static/logo-once-pueblos.png' />
    <style>{`
      .logo-banner {
        width: 100%;
        height: 100px;
        margin: 0px;
        display: flex;
        align-items: center;
      }

      #logo {
        position:fixed;
        left: 50%;
        vertical-align: middle;
      }
    `}</style>
  </div>
)
