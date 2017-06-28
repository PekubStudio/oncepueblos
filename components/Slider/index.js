import SliderWrapper from './SliderWrapper'
export default () => (
  <div className='content'>
    <SliderWrapper className='slider-wrapper' />
    <style jsx>
      {`
        .slider-wrapper {
          display: block;
        }
    `}
    </style>
  </div>
)
