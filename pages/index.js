import Link from 'next/link'
import { Col, Row } from 'react-grid-system'

export default () => (
  <div>
    <Row>
      <Col md={6}>
        <h1>Left</h1>
      </Col>
      <Col md={6}>
        <h1>Right</h1>
      </Col>
    </Row>
    <h1>Hello I am a <Link href='/about'><a>Pekub</a></Link></h1>
  </div>
)
