import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { JiraCrawler } from 'background/crawler/jiraCrawler'

const columns = [{ key: 'id', name: 'ID', editable: true }, { key: 'title', name: 'Title', editable: true }, { key: 'complete', name: 'Complete', editable: true }]

const rows = [{ id: 0, title: 'Task 1', complete: 20 }, { id: 1, title: 'Task 2', complete: 40 }, { id: 2, title: 'Task 3', complete: 60 }]

class DataGrid extends React.Component {
  constructor(props) {
    super(props)

    // to bind current context(=this object)
    this.onGridRowsUpdated = this.onGridRowsUpdated.bind(this)

    this.state = { rows }
    this.jiraCrawler = new JiraCrawler()
    let jql = 'project = "TEST" AND assignee = currentUser() AND resolution = Unresolved ORDER BY priority DESC'
    this.jiraCrawler.search(jql).then((res, err) => {
      console.log(res)
      this.jiraSearchResults = res
      return this.jiraSearchResults
    })
  }

  onGridRowsUpdated({ fromRow, toRow, updated }) {

    this.setState(state => {
      const rows = state.rows.slice()
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated }
      }
      return { rows }
    })
  }

  render() {
    return <ReactDataGrid columns={columns} rowGetter={i => this.state.rows[i]} rowsCount={3} onGridRowsUpdated={this.onGridRowsUpdated} enableCellSelect={true} />
  }
}

export default DataGrid
