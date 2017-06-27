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

export default () => (
  <div className='content'>
    <ul>
      {
        menu.map((item) => (
          <li>{item}</li>
        ))
      }
    </ul>
    <style>{`
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
        }
    `}</style>
  </div>
)
