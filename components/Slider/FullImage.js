import React, { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'
const text = {
  zIndex: 0
}
export default class FullImage extends Component {
  render () {
    return (
      <Transition
        component={false}
        enter={{
          opacity: spring(1, {stiffness: 150, damping: 50})
        }}
        leave={{
          opacity: 0
        }}
        >
        <div className='wrapper' style={text}>
          <div className='img-container' >
            <img className='img' src='https://www.thomaskeller.com/sites/default/files/styles/homepage_height_620px/public/media/franchises/interior_exterior_images/tk.com_homepage3_3a_0.jpg?itok=rRStAMWq' alt='Full Image' />
          </div>
          <style jsx>
            {`
              @keyframes cf3FadeInOut {
                0% {
                opacity:0;
                }
                45% {
                opacity:0;
                }
                55% {
                opacity:1;
                }
                100% {
                opacity:1;
                }
              }
              .img-container {
                height: 388px;
                display: block;
                width: 100%;
              }
              .wrapper {
                position: absolute;
                max-width: 875px;
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
    )
  }
}
