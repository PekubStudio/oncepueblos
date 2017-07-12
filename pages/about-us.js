import React from 'react'
import App from '../components/App/App'
import Info from '../components/Info'
import en from '../components/translate/en-US'
import es from '../components/translate/es'

const title = 'Once Pueblos'

const url = '/static/nosotros-image.jpg'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: []
    }
  }

  componentDidMount () {
    if (window.localStorage.locale === 'es') {
      //  const lan = require('../components/translate/es')
      this.setState({
        language: es
      })
    }
    if (window.localStorage.locale === 'en') {
      //  const lan = require('../components/translate/en')
      this.setState({
        language: en
      })
    }
  }

  render () {
    return (
      <App>
        <Info title={title} content={this.state.language.nosotros} imgUrl={url} />
      </App>
    )
  }
}
