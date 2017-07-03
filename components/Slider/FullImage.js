import React, { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'
import Delay from 'react-delay'
import { Row, Col } from 'react-grid-system'

export default class FullImage extends Component {
  render () {
    var zIndex = this.props.zindex
    var url = this.props.url
    var delay = this.props.delay
    return (
      <Delay wait={delay}>
        <Transition
          component={false}
          enter={{
            opacity: spring(1, {stiffness: 150, damping: 50})
          }}
          leave={{
            opacity: 0
          }}
          >
          <div className='wrapper' style={{zIndex: zIndex}}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className='img-container' >
                  <img className='img' src={url} alt='Full Image' />
                </div>
              </Col>
            </Row>
            <style jsx>
              {`
                .img-container {
                  height: 100%;
                  max-height: 388px;
                  display: block;
                  width: 100%;
                }
                .wrapper {
                  position: absolute;
                  max-width: 875px;
                  padding: 0;
                  margin: 0;
                  width: 100%;
                  top: 0;
                  left: 0;
                }
                .img {
                  width: 100%;
                  height: 100%;
                }
              `}
            </style>
          </div>
        </Transition>
      </Delay>
    )
  }
}
