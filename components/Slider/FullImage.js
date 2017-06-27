import React from 'react'

const FullImage = () => (
  <div className='wrapper'>
    <div className='img-container' >
      <img className='img' src='https://www.thomaskeller.com/sites/default/files/styles/homepage_height_620px/public/media/franchises/interior_exterior_images/tk.com_homepage3_3a_0.jpg?itok=rRStAMWq' alt='Full Image' />
    </div>
    <style jsx>
      {`
        .img-container {
          height: 388px;
          display: block;
          width: 100%;
        }
        .wrapper {
          position: absolute;
          max-width: 875px;
        }
        .img {
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
)

export default FullImage
