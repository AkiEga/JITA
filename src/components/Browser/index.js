import React from 'react'
import { connect } from 'react-redux'


export class Browser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url_history: ['https://www.google.com'],
      url_history_pos: 0,
    }
    this.webview = React.createRef()
    this.handleOnLoad = this.handleOnLoad.bind(this)
  }
  componentDidMount() {
    this.webview.current.addEventListener('did-finish-load', this.handleOnLoad)
  }
  handleOnLoad(e) {
    console.log(e)
    console.log(e.srcElement.src)
  }
  render() {
    let url = this.props.url
    return <webview id="wv" ref={this.webview} src={this.props.url} onload={this.handleOnLoad}></webview>
  }
}

export default connect(
	state => ({url: state.url}),
	dispatch => ({dispatchMoveTicketPage: url => dispatch(moveTicketPage(url))})
)(Browser)