import App from '../components/App/App'
import Info from '../components/Info'

const content = `Once Pueblos, como su nombre lo indica, es una región  de Michoacán conocida como ¨la cañada de los once pueblos¨ denominada en el idioma de los nativos como ERAXAMAN, localizada en la Meseta Purepecha donde destaca por su exquisita gastronomía siempre  rodeada de mujeres que nacieron con el fogón en su casa y la marca del metate en su mano.
Nuestra cocina va dirigida a   la difusión gastronómica de esta región y la elegancia de nuestro México.
Ubicado en una zona completamente fuera de estrés, con deleite visual y emocional para nuestros comensales, con el cobijo de la atención cálida del personal de servicio que nos caracteriza a comparación de otros países.
Uno de los principales objetivos es mostrar el rostro y el corazón del México moderno con sus raíces culinarias   poco conocidas para el extranjero y las personas que habitan en esta frontera.`

const title = 'Once Pueblos'

const url = '/static/nosotros-image.jpg'

export default () => (
  <App>
    <Info title={title} content={content} imgUrl={url} />
  </App>
)
