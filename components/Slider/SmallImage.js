import React, { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'
import Delay from 'react-delay'
export default class SmallImage extends Component {
  render () {
    var zIndex = this.props.zindex
    var url = this.props.url
    var delay = this.props.delay
    var type = this.props.type
    if (type === 'left-small') {
      var right = '66.6%'
      var left = 0
    } else {
      right = 0
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
          <div className='wrapper' style={{zIndex: zIndex, left: left, right: right}}>
            <div className='img-container' >
              <img className='img' src={url} alt='Small Image' />
            </div>
            <style jsx>
              {`
                .img-container {
                  height: 100%;
                  max-height: 388px;
                  max-width: 294px;
                  display: block;
                  width: 100%;
                }
                .img {
                  width: 100%;
                  height: 100%;
                }
                .wrapper {
                  position: absolute;
                  max-width: 875px;
                  top: 0;
                  right: 0;
                }
              `}
            </style>
          </div>
        </Transition>
      </Delay>
    )
  }
}
