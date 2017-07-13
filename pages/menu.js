import App from '../components/App/App'
import Info from '../components/Info'
import en from '../components/translate/en-US'
import es from '../components/translate/es'
import React from 'react'

const url = '/static/historias-image.jpg'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: []
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
        <Info title={this.state.language.menuTitulo} content={this.state.language.menu} imgUrl={url} />
      </App>
    )
  }
}
