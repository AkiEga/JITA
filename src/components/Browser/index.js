import React from 'react'
import { connect } from 'react-redux'
import {
  Icon,
  Accordion,
} from 'semantic-ui-react'


export class Browser extends React.Component {
  constructor(props){
    super(props)
    this.state = { activeIndex: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e, titleProps){
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }  
  render() {    
    const { activeIndex } = this.state
    let url = this.props.url
    return <Accordion>        
      <Accordion.Title
        index={0}
        onClick={this.handleClick}
      >
      <Icon name='dropdown' />
      Browser
      </Accordion.Title>
      <Accordion.Content >
      <webview 
      src={url} 
      autosize="on" 
      style={{height: '-webkit-fill-available'}}>
      </webview>
      
      </Accordion.Content>        
    </Accordion>
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