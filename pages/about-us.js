import App from '../components/App/App'
import Info from '../components/Info'

const content = 'Occupy offal neutra, fanny pack ethical aute twee magna austin in copper mug. Woke yr cillum unicorn dolore organic esse pop-up vinyl scenester disrupt cred echo park dolor. Hot chicken next level deep v af. Deserunt cloud bread et, pop-up vaporware eu sartorial palo santo vape keytar chicharrones hell of tote bag tumblr aute. Gentrify plaid vinyl pour-over, nisi jean shorts before they sold out scenester kitsch everyday carry swag sriracha in. YOLO waistcoat venmo quinoa franzen, retro raclette glossier street art bushwick. Seitan salvia franzen air plant drinking vinegar vegan la croix viral. Four loko banjo sartorial kogi. Food truck cold-pressed asymmetrical adaptogen single-origin coffee, trust fund polaroid hammock pork belly. Keytar mustache DIY enamel pin synth unicorn non la croix deep v. Deserunt pop-up quis, dreamcatcher bespoke ugh gluten-free master cleanse in schlitz.'

const title = 'About us'

const url = 'https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/7b/c6/restaurant-view.jpg'

export default () => (
  <App>
    <Info title={title} content={content} imgUrl={url} />
  </App>
)
