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
    let id = 0
    var left
    var right
    if (type === 'left-medium') {
      right = '33.4%'
      left = 0
    } else if (type === 'right-medium') {
      right = 0
      left = '33.3%'
    } else {
      right = 0
      left = 0
    }
    return (
      <Delay wait={delay}>
        <Transition
          component={false}
          enter={{
            opacity: spring(1, {stiffness: 50, damping: 20})
          }}
          leave={{
            opacity: 0
          }}
          >
          <div className='wrapper' style={{zIndex: zIndex, marginRight: right, marginLeft: left}} key={id++}>
            <div className='img-container' >
              <img className='img' src={url} alt='Medium Image' />
            </div>
            <style jsx>
              {`
                .img-container {
                  height: 100%;
                  max-height: 388px;
                  max-width: 568px;
                  display: block;
                  width: 100%;
                }
                .img {
                  width: 100%;
                  height: auto;
                  max-height: 388px;
                }
                .wrapper {
                  position: absolute
                  max-width: 875px
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
