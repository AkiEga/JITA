import React from 'react'
import ReactDataGrid from 'react-data-grid'

export default class Browser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {			
			url: "https://www.google.com",
			url_history: ["https://www.google.com"],
			url_history_pos: 0
		}
	}
	render() {
		return <webview id="wv" src={this.state.url}></webview>
	}
}