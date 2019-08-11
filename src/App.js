import React from 'react'
import { Component } from 'react'
import Navbar from 'components/Navbar'
import Custom from 'components/Custom'
import DataGrid from 'components/DataGrid'
import 'custom.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Custom />
        <DataGrid />
      </div>
    )
  }
}
export default App
