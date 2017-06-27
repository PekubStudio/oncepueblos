import Nav from '../Nav'
import Divider from 'react-md/lib/Dividers'
import Social from '../Social'

const home = () => (
  <div>
    <Nav />
    <div className='divider'>
      <Divider />
      <Social />
    </div>
    <style>{`
      .divider {
        width:50%;
        margin: auto;
        padding-top: 50px;
      }
    `}</style>
  </div>
)

export default home
