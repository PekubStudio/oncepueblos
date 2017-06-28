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
              <Link href={'/about-us'}><li key={key++}>{item.toUpperCase()}</li></Link>
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
            }

            .content li {
              font-family: Lustria;
              list-style: none;
              display: inline-block;
              padding-right: 20px;
              padding-left: 20px;
              transition: font-size .1s ease-in-out;
            }

            .content li:hover {
              font-size: 18px;
            }
        `}</style>
      </div>
    )
  }
}
