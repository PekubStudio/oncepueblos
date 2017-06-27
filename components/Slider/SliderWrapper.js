import React, { Component } from 'react'
import {Col, Container, Row} from 'react-grid-system'
import FullImage from './FullImage'
import SmallImage from './SmallImage'
import MediumImage from './MediumImage'

export default class SliderWrapper extends Component {
  constructor () {
    super()
    this.state = {
      flag: 0
    }
  }

  imgSelector (selector) {
     return (
       <div>
         <FullImage />
         <SmallImage />
       </div>
     )
  }

  render () {
    let flag = this.state.flag
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className='wrapper'>
                <div className='slider-container' >
                  {this.imgSelector(flag)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>
          {`
            .wrapper {
              margin-top: 100px;
              max-width: 875px;
              margin-left: auto;
              margin-right: auto;

            }
            .slider-container {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </div>
    )
  }
}
