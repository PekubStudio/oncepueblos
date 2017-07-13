import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class TranslaterButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      language: []
    }
  }

  componentDidMount () {
    switch (window.localStorage.locale) {
      case 'es':
        this.setState({
          locale: 'es'
        })
        break
      case 'en':
        this.setState({
          locale: 'en'
        })
        break
      default:
        window.localStorage.locale = 'es'
        window.location.reload()
    }
    console.log('CMD', window.localStorage.locale)
  }

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  changeLanguage (lan) {
    if (lan === 'es') {
      global.window.localStorage.locale = lan
      console.log('Langue changed to ', lan)
      global.window.location.reload()
    }
    if (lan === 'en') {
      global.window.localStorage.locale = lan
      console.log('Langue changed to ', lan)
      global.window.location.reload()
    }
  }

  render () {
    return (
      <div className='translator'>
        <span onClick={this.changeLanguage.bind(this, 'es')}>Español</span>
        <span>/</span>
        <span onClick={this.changeLanguage.bind(this, 'en')}>English</span>
        <style jsx>
          {`
            span {
              letter-spacing: 2px;
              font-size: 11px;
              color: black;
              font-family: Lustria;
              margin-left: 15px;
              margin-right: 15px;
              cursor: pointer;
              text-transform: uppercase;
            }
            span:hover {
              color: #5e5e5e;
            }
            .translator {
              text-align: center;
              margin-top: 25px;
              margin-bottom: 30px;
            }
          `}
        </style>
      </div>
    )
  }
}
