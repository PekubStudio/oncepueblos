import { Row, Col, Container } from 'react-grid-system'

const Info = ({ title, content, imgUrl }) => (
  <div className='info'>
    <Container>
      <Row style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
        <Col lg={1} />
        <Col md={5} lg={4} style={{marginLeft: 40}}>
          <div className='paragraph' id='scroll'>
            <h2>{title}</h2>
            {content}
          </div>
        </Col>
        <Col md={7} lg={7}>
          <img src={imgUrl} />
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .info {
        display: block;
      }
      h2 {
        font-family: Lustria;
        margin:0;
      }
      img {
        width: 580px;
        height: 404px;
      }
      .paragraph {
        height: 404px;
        overflow-y: scroll;
        padding-right:10px;
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
    `}</style>
  </div>
)

export default Info
