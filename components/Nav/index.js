import React, { Component } from 'react'
import Link from 'next/link'

export default class Nav extends Component {
  render () {
    const menu = [
      'Nosotros',
      '|',
      'Menu & Historias',
      '|',
      'Vino',
      '|',
      'Eventos',
      '|',
      'Contacto'
    ]

    let key = 0
    return (
      <div className='content'>
        <ul>
          {
            menu.map((item) => (
              <li key={key++}><Link href='/about-us'><a>{item.toUpperCase()}</a></Link></li>
            ))
          }
        </ul>
        <style jsx>{`
            .content {
              position: relative;
              margin-top: 55px;
              text-align: center;
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
            }
        `}</style>
      </div>
    )
  }
}
