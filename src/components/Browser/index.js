import React from 'react'
import ReactDataGrid from 'react-data-grid'

export default class Browser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {			
			url_history: ["https://www.google.com"],
			url_history_pos: 0
		}
		this.webview = React.createRef()
		this.handleOnLoad = this.handleOnLoad.bind(this)
	}
	componentDidMount(){
		this.webview.current.addEventListener('did-finish-load', this.handleOnLoad)
	}
	handleOnLoad(e){
		console.log(e)
		console.log(e.srcElement.src)
	}
	render() {
		let url = this.state.url_history[this.state.url_history_pos]
		return <webview id="wv" ref={this.webview} src={url} onload={this.handleOnLoad}></webview>
	}
}