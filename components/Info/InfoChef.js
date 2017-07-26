import { Row, Col, Visible } from 'react-grid-system'
import SingleImageSlider from '../Slider/SingleImageSlider'

const InfoChef = ({ title, content, imgUrl }) => (
  <div className='info'>
    <Row className='row'style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
      <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{paddingLeft: 0, paddingRight: 0}}>
        <Visible md lg xl>
          <div className='paragraph' id='scroll'>
            <h2>{title}</h2>
            {content}
          </div>
        </Visible>
        <Visible xs sm>
          <div className='img-containerMobile'>
            <SingleImageSlider />
          </div>
        </Visible>
      </Col>
      <Col xs={12} sm={12} md={8} lg={8} xl={8} style={{paddingRight: 0}}>
        <Visible md lg xl>
          <div className='img-container'>
            <SingleImageSlider />
          </div>
        </Visible>
        <Visible xs sm>
          <div className='paragraph-mobile'>
            <h2>{title}</h2>
            {content}
          </div>
        </Visible>
      </Col>
    </Row>
    <style jsx>
      {`
        .info {
          display: block;
          max-width: 875px;
          margin-left: auto;
          margin-right: auto;
        }
        h2 {
          font-family: Lustria;
          margin:0;
          font-size: 17px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .img-container {
          max-width: 568px;
          height: 388px;
          margin-left: auto;
          margin-right: auto;
          display: block
        }
        .img-containerMobile {
          max-width: 568px;
          height: 388px;
          margin-left: auto;
          margin-right: auto;
          display: block
        }
        img {
          width: 100%;
          height: 100%;
        }
        @media screen and (max-width: 768px) {
            .img-container {
                margin-top: 30px;
                height: auto;
            }
            .img-containerMobile {
              height: auto;
              margin-bottom: 25px;
            }
        }
        @media screen and (max-width: 876px) {
            .img-container {
                height: auto;
            }
        }
        .paragraph {
          height: 404px;
          overflow-y: scroll;
          padding-left: 15px;
          padding-right: 15px;
          color: #636363;
          font-size: 14px;
          line-height: 1.65em;
          letter-spacing: .6px;
          max-height: 388px;
          font-family: Lato;
        }
        .paragraph-mobile {
          height: 100%;
          overflow-y: hidden;
          overflow-x: hidden;
          color: #636363;
          font-size: 14px;
          line-height: 1.65em;
          font-family: Lato;
          letter-spacing: .6px;
          padding-right: 20px;
        }

        #scroll::-webkit-scrollbar {
          width: 2px;
        }
        #scroll::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }
        #scroll::-webkit-scrollbar-thumb {
          -webkit-border-radius: 2px;
          border-radius: 2px;
          background: rgba(0,0,0,0.8);
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
        }
        #scroll::-webkit-scrollbar-thumb:window-inactive {
          background: rgba(255,0,0,0);
        }
      `}
    </style>
  </div>
)

export default InfoChef
