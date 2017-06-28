import React, { Component } from 'react'
import FullImage from './FullImage'
import SmallImage from './SmallImage'
import MediumImage from './MediumImage'
// import Delay from 'react-delay'
import ReactInterval from 'react-interval'

export default class SliderWrapper extends Component {
  getIndex (tipo) {
    if (tipo === 'full') {
      return <FullImage />
    } else if (tipo === 'left-small') {
      return <SmallImage />
    } else {
      return <MediumImage />
    }
  }

  print (tipo) {
    console.log(tipo)
  }

  render () {
    let arreglo = [
      'full',
      'left-small',
      2
    ]
    return (
      <div className='main-wrapper'>
        {
          arreglo.map((tipo) => (
            this.getIndex(tipo)
          ))
        }
        <style jsx>
          {`
            .main-wrapper {
              border: 2px solid black;
              max-width: 875px;
              margin-left: auto;
              margin-right: auto;
              display: block;
              height: 620px;
              max-height: 388px;
              position: relative;
            }
          `}
        </style>
      </div>
    )
  }
}
