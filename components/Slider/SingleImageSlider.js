import React, { Component } from 'react'
import MediumImage from './MediumImage'

export default class SliderWrapper extends Component {
  getDelay (id) {
    let step = 3500
    if (id === 0) {
      let time = 500
      return time
    }
    let time = step * id
    return time
  }

  render () {
    let id = -1
    let imagenes = [
      { url: '/static/chef/chef4.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef3.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef2.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef1.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef4.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef3.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef2.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef1.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef.jpg', id: ++id, time: this.getDelay(id), type: 'medium' },
      { url: '/static/chef/chef4.jpg', id: ++id, time: this.getDelay(id), type: 'medium' }
    ]
    return (
      <div className='main-wrapper' >
        {
           imagenes.map((image) => (
             <div key={image.id}>
               <MediumImage url={image.url} zIndex={image.id} delay={image.time} type={image.type} />
             </div>
           ))
        }
        <style jsx>
          {`
            .main-wrapper {
              max-width: 568px;
              margin-left: auto;
              margin-right: auto;
              width: 100%;
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
