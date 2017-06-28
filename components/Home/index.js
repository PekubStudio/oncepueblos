import Nav from '../Nav'
import Divider from 'react-md/lib/Dividers'
import Social from '../Social'
import Slider from '../Slider'
// import {Container, Row, Col} from 'react-grid-system'

const home = () => (
  <div>
    <Slider />
    <Nav />
    <div className='divider'>
      <Divider />
      <Social />
    </div>
    <style jsx>{`
      .divider {
        width:50%;
        margin: auto;
        padding-top: 50px;
        position: relative;
      }
      .slider {
        width:50%;
        margin: auto;
        padding-top: 50px;
        position: relative;
      }
    `}</style>
  </div>
)

export default home
