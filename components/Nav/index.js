import React, { Component } from 'react'
import Link from 'next/link'
import en from '../translate/en-US'
import es from '../translate/es'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      language: [],
    }
  }
  componentDidMount () {
    if (window.localStorage.locale === 'es') {
      this.setState({
        language: es
      })
    }
    if (window.localStorage.locale === 'en') {
      this.setState({
        language: en
      })
    }
  }

  render () {
    const menu = [
      {title: this.state.language.navInicio, url: '/'},
      {title: '|', url: '#'},
      {title: this.state.language.navNosotros, url: '/about-us'},
      {title: '|', url: '#'},
      {title: this.state.language.navMenu, url: '/menu'},
      {title: '|', url: '#'},
      {title: this.state.language.navCocina, url: '/kitchen'},
      {title: '|', url: '#'},
      {title: this.state.language.navChef, url: '/chef'},
      {title: '|', url: '#'},
      {title: this.state.language.navContacto, url: '/contact-us'}
    ]

    let key = 0
    return (
      <div className='content'>
        <ul>
          {
            menu.map((item) => (
              <li key={key++}><Link href={item.url}><a>{item.title}</a></Link></li>
            ))
          }
        </ul>
        <style jsx>{`
            .content {
              position: relative;
              text-align: center;
              margin-top: 45px;
              top: 0;
              left: 0;
            }

            .content ul {
              display: block;
              -webkit-padding-start: 0;
            }

            .content a {
              text-decoration: none;
              color: black;
            }

            .content li {
              font-family: Lustria;
              list-style: none;
              display: inline-block;
              padding-right: 10px;
              padding-left: 10px;
              transition: font-size .1s ease-in-out;
              letter-spacing: 1px;
            }
            .content a:hover {
              color: #5e5e5e;
            }
            @media screen and (max-width: 768px) and (min-width: 300px) {
                .content li {
                    display: block
                }
            }
        `}</style>
      </div>
    )
  }
}
