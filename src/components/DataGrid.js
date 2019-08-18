import React from 'react'
import { connect } from 'react-redux'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

import { JiraCrawler } from 'background/crawler/jiraCrawler'
import {moveTicketPage} from 'redux/actions'

let tickets = []

const columns = [
  {
    dataField: "key",
    text: 'key'
  },
  {
    dataField: "summary",
    text: 'summary'
  },
  {
    dataField: "update",
    text: 'update'
  }
]
  // { key: 'url', name: 'url', editable: false, formatter: ({value})=>{return <button onClick={e => dispatchMoveTicketPage(value)}>{value}</button>}

export class DataGrid extends React.Component {
  constructor(props) {
    super(props)

    // to bind current context(=this object)
    this.onRowClickEvent = this.onRowClickEvent.bind(this)
    
    this.state = { tickets }

    // For JIRA
    this.jiraCrawler = new JiraCrawler()
    let jql = 'project = "TEST" AND assignee = currentUser() AND resolution = Unresolved ORDER BY priority DESC'
    this.jiraCrawler.search(jql).then((res, err) => {
      console.log(res)
      this.jiraSearchResults = res
      if(res.issues){
        for(var i of res.issues){
          let new_issue = {
            key: i.key,
            summary: i.fields.summary,
            update: i.fields.updated,
            url: this.jiraCrawler.genBrowserURL(i.key)
          }
          tickets.push(new_issue)
        }
        this.setState(tickets)
      }      
    })
    this.rowEvents = {
      onClick: this.onRowClickEvent
    }
  }

  // onGridRowsUpdated({ fromRow, toRow, updated }) {

  //   this.setState(state => {
  //     const ticket = state.tickets.slice()
  //     for (let i = fromRow; i <= toRow; i++) {
  //       tickets[i] = { ...tickets[i], ...updated }
  //     }
  //     return { rows }
  //   })
  // }
  onRowClickEvent(e, row, rowIndex){
    console.log(e)
    console.log(row)
    console.log(rowIndex)
  }
  render() {
    let tickets = this.state.tickets
    return <BootstrapTable keyField='id' data={ tickets } columns={ columns } rowEvents={this.rowEvents}/>
  }
}

export default connect(
	state => ({url: state.url}),
	dispatch => ({dispatchMoveTicketPage: url => dispatch(moveTicketPage(url))})
)(DataGrid)

