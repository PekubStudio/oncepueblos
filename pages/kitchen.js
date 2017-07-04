import App from '../components/App/App'
import Info from '../components/Info'

const content = 'Once Pueblos es una cocina de raíces michoacanas y personalidad mexicana,  donde se fusiona la frescura  de los ingredientes de Baja California cocinándolos con técnicas ancestrales utilizadas  desde antaño producto de la tradición y de la experiencia de cocineras mexicanas. Dentro de los diversos  platillos que usted podrá degustar, se encuentra la Torre de Uchepo (tamal de elote blanco)  con Costilla de cerdo, acompañada de salsa de tomatillo con chile puya, crema de rancho y queso Cotija, platillo de tradición Michoacana, que transporta a este cálido lugar y cautiva  los paladares de sus visitantes.'

const title = 'Cocina'

const url = '/static/kitchen-image.jpg'

export default () => (
  <App>
    <Info title={title} content={content} imgUrl={url} />
  </App>
)
