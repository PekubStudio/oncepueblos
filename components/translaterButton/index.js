import React, {Component} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class TranslaterButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      language: [],
      value: 1
    }
  }

  componentDidMount () {
    switch (window.localStorage.locale) {
      case 'es':
        this.setState({
          locale: 'es',
          value: 1
        })
        break
      case 'en':
        this.setState({
          locale: 'en',
          value: 2
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

  handleChange (event, index, value) {
    this.setState({value})
    if (value === 1) {
      this.changeLanguage('es')
    }
    if (value === 2) {
      this.changeLanguage('en')
    }
  }

  render () {
    return (
      <div className='translator'>
        <MuiThemeProvider>
          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
              <MenuItem value={1} primaryText='Espanol' />
              <MenuItem value={2} primaryText='English' />
            </DropDownMenu>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
