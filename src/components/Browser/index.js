import React from 'react'
import { connect } from 'react-redux'

export class Browser extends React.Component {
  constructor(props) {
    super(props)
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
    return <webview id="wv" ref={this.webview} src={url} onload={this.handleOnLoad}></webview>
  }
}

const state2url = state =>{
	return state.browserReducer.url
}

const mapStateToProps = state => ({
	url: state2url(state)
})

export default connect(
	mapStateToProps,
	null
)(Browser)