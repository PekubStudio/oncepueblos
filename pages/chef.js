import App from '../components/App/App'
import Info from '../components/Info'

const content = 'Michoacana de nacimiento, nuestra chef siempre  apasionada de sus raíces culinarias,  plasma  en su cocina con ingredientes cultivados en nuestro huerto los platillos que cambian conforme al cultivo del temporal. Egresada de Culinary Art School con Maestría en Cocinas de México inicio  su carrera en la Ciudad de Guadalajara, Jalisco, posteriormente y desde el año 2013 inició su propio proyecto como Chef y propietaria del restaurante de cocina mexicana “La Mestiza” en la ciudad de Tijuana, Baja California. Además de dirigir su propio negocio, participa en el programa de televisión Cuarto para las Cuatro con una cápsula de cocina donde su objetivo es continuar con la difusión de la cocina tradicional mexicana.'

const title = 'Chef'

const url = '/static/chef.jpg'

export default () => (
  <App>
    <Info title={title} content={content} imgUrl={url} />
  </App>
)
