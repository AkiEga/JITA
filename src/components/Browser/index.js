import React from 'react'
import { connect } from 'react-redux'

export class Browser extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {    
    let url = this.props.url
    return <webview src={url} autosize="on"/>
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