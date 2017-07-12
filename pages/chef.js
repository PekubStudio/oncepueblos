import App from '../components/App/App'
import Info from '../components/Info'
import en from '../components/translate/en-US'
import es from '../components/translate/es'

const title = 'Chef'

const url = '/static/chef.jpg'

export default class extends React.Component {
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
    return (
      <App>
        <Info title={title} content={this.state.language.chef} imgUrl={url} />
      </App>
    )
  }
}
