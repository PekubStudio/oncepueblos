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

export default () => (
  <div className='content'>
    <ul>
      {
        menu.map((item) => (
          <li key={key++}>{item.toUpperCase()}</li>
        ))
      }
    </ul>
    <style jsx>{`
        .content {
          margin-top: 55px;
          text-align: center;
        }

        .content ul {
          display: block;
        }

        .content li {
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
