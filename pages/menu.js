import App from '../components/App/App'
import Info from '../components/Info'

const content = 'Influenciado por la cocina Michoacana, nuestro menú celebra la variedad de ingredientes de la Baja adaptándose a las diferentes temporadas del año, siempre ofreciendo sorpresas a nuestros visitantes.'

const title = 'Menú'

const url = '/static/historias-image.jpg'

export default () => (
  <App>
    <Info title={title} content={content} imgUrl={url} />
  </App>
)
