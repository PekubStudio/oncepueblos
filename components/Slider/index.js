import SliderWrapper from './SliderWrapper'
export default () => (
  <div className='content'>
    <SliderWrapper className='slider-wrapper' />
    <style jsx>
      {`
        .content {
          position: relative;
        }
        .slider-wrapper {
          display: block;
        }
    `}
    </style>
  </div>
)
