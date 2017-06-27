import React from 'react'

const MediumImage = () => (
  <div>
    <div className='img-container' >
      <img className='img' src='https://www.thomaskeller.com/sites/default/files/styles/homepage_height_620px/public/media/franchises/interior_exterior_images/tk.com_homepage3_3a_0.jpg?itok=rRStAMWq' alt='Full Image' />
    </div>
    <style jsx>
      {`
        @keyframes cf3FadeInOut {
           0% {
           opacity:1;
          }
          45% {
          opacity:1;
          }
          55% {
          opacity:0;
          }
          100% {
          opacity:0;
          }
          }
        .img-container {
          height: 388px;
          display: block;
          width: ;
        }
        .img {
          animation-name: cf3FadeInOut;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 5s;
          animation-direction: alternate;
          width: 100%;
          height: 100%;
          opacity: 1;
        }
      `}
    </style>
  </div>
)

export default MediumImage
