import { Row, Col } from 'react-grid-system'

const Info = ({ title, content, imgUrl }) => (
  <div className='info'>
    <Row className='row'style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
      <Col md={5} lg={4} style={{marginLeft: 40}}>
        <div className='paragraph' id='scroll'>
          <h2>{title}</h2>
          {content}
        </div>
      </Col>
      <Col md={7} lg={8}>
        <div className='img-container'>
          <img src={imgUrl} />
        </div>
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
        img {
          width: 100%;
          height: 100%;
        }
        @media screen and (max-width: 768px) {
            .img-container {
                margin-top: 30px;
                height: auto;
            }
        }
        .paragraph {
          height: 404px;
          overflow-y: scroll;
          padding-right:10px;
          color: #636363;
          font-size: 14px;
          line-height: 1.65em;
          letter-spacing: .6px;
          max-height: 388px;
          font-family: Lato;
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

export default Info
