import React, { Component } from 'react'
import FullImage from './FullImage'
import SmallImage from './SmallImage'
import MediumImage from './MediumImage'

export default class SliderWrapper extends Component {
  main (image) {
    if (image.type === 'full') {
      return (<FullImage url={image.url} zIndex={image.id} delay={image.time} type={image.type} />)
    } else if (image.type === 'right-small' || image.type === 'left-small') {
      return (<SmallImage url={image.url} zIndex={image.id} delay={image.time} type={image.type} />)
    } else if (image.type === 'left-medium' || image.type === 'right-medium') {
      return (<MediumImage url={image.url} zIndex={image.id} delay={image.time} type={image.type} />)
    }
  }

  getDelay (id) {
    let step = 2500
    let time = step * id
    return (time)
  }

  loop (array, i) {
    console.log(array[i])
    let _self = this
    if (i < array.length) {
      setTimeout(function () {
        i++
        return _self.loop(array, i)
      }, 5000)
    }
    if (i === array.length - 1) {
      setTimeout(function () {
        return _self.loop(array, 0)
      }, 5000)
    }
  }

  render () {
    let id = 0
    let i = 0
    var imagenes = [
      { url: '/static/lg/lgOne.jpg', id: id, time: this.getDelay(id), type: 'full' },
      { url: '/static/lg/lgTwo.jpg', id: ++id, time: this.getDelay(id), type: 'full' },
      { url: '/static/lg/lgThree.jpg', id: ++id, time: this.getDelay(id), type: 'full' },
      { url: '/static/lg/lgFour.jpg', id: ++id, time: this.getDelay(id), type: 'full' },
      { url: '/static/lg/lgFive.jpg', id: ++id, time: this.getDelay(id), type: 'full' }
    ]
    this.loop(imagenes, i)
    return (
      <div className='main-wrapper' >
        {
           imagenes.map((image) => (
             this.main(image)
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
