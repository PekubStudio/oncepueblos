import React from 'react'

const SmallImage = () => (
  <div className='wrapper'>
    <div className='img-container' >
      <img className='img' src='https://www.thomaskeller.com/sites/default/files/styles/homepage_height_620px/public/media/franchises/interior_exterior_images/tk.com_homepage3_1b_0.jpg?itok=FPRjPbYG' alt='Full Image' />
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
          width: 292px;
        }
        .wrapper {
          animation-name: cf3FadeInOut;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 5s;
          animation-direction: alternate;
          opacity: 0;
          position: absolute;
        }
        .img {
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
)

export default SmallImage
