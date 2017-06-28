import React, { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'
import Delay from 'react-delay'
export default class MediumImage extends Component {
  render () {
    var zIndex = this.props.zindex
    var url = this.props.url
    var delay = this.props.delay
    var type = this.props.type
    if (type === 'left-medium') {
      var left = 0
    } else {
      left = '66.6%'
    }
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
          <div className='wrapper' style={{zIndex: zIndex, left: left}}>
            <div className='img-container' >
              <img className='img' src={url} alt='Medium Image' />
            </div>
            <style jsx>
              {`
                .img-container {
                  height: 388px;
                  display: block;
                  width: 100%;
                }
                .img {
                  width: 100%;
                  height: 100%;
                }
                .wrapper {
                  position: absolute
                  max-width: 583px;
                  top:0;
                  right:0;
                }
              `}
            </style>
          </div>
        </Transition>
      </Delay>
    )
  }
}
