import React, { Component } from 'react'
import FullImage from './FullImage'
import SmallImage from './SmallImage'
import MediumImage from './MediumImage'
// import Delay from 'react-delay'

export default class SliderWrapper extends Component {
  main (url, type, zIndex, counter, time) {
    if (type[counter] === 'full') {
      return (<FullImage url={url[counter]} zIndex={zIndex[counter]} delay={time[counter]} type={type[counter]} />)
    } else if (type[counter] === 'right-small' || type[counter] === 'left-small') {
      return (<SmallImage url={url[counter]} zIndex={zIndex[counter]} delay={time[counter]} type={type[counter]} />)
    } else if (type[counter] === 'left-medium' || type[counter] === 'right-medium') {
      return (<MediumImage url={url[counter]} zIndex={zIndex[counter]} delay={time[counter]} type={type[counter]} />)
    }
  }
  render () {
    var url = [
      '/static/lg/lgOne.jpg',
      '/static/lg/lgTwo.jpg',
      '/static/lg/lgThree.jpg',
      '/static/lg/lgFour.jpg',
      '/static/lg/lgFive.jpg'
    ]
    var type = ['full', 'full', 'full', 'full', 'full']
    var zIndex = [0, 1, 2, 3, 4, 5]
    var time = [0, 2500, 5000, 7500, 10000, 12500]
    return (
      <div className='main-wrapper' id='prueba'>
        {
          zIndex.map((counter) => (
            this.main(url, type, zIndex, counter, time)
          ))
             this.main(url, type, zIndex, counter, time)
           ))
        }
        <style jsx>
          {`
            .main-wrapper {
              max-width: 875px;
              margin-left: auto;
              margin-right: auto;
              width: 100%;
              display: block;
              height: 620px;
              max-height: 388px;
              position: relative;
            }
            @media screen and (max-width: 768px) and (min-width: 700px) {
                .main-wrapper {
                    max-height: 340px;
                }
            }
            @media screen and (max-width: 700px) and (min-width: 600px) {
                .main-wrapper {
                    max-height: 320px;
                }
            }
            @media screen and (max-width: 600px) and (min-width: 500px) {
                .main-wrapper {
                    max-height: 270px;
                }
            }
            @media screen and (max-width: 500px) and (min-width: 400px) {
                .main-wrapper {
                    max-height: 220px;
                }
            }
            @media screen and (max-width: 400px) and (min-width: 300px) {
                .main-wrapper {
                    max-height: 200px;
                }
            }
            @media screen and (max-width: 300px) and (min-width: 200px) {
                .main-wrapper {
                    max-height: 170px;
                }
            }
          `}
        </style>
      </div>
    )
  }
}
