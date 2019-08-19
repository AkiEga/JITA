import React from 'react'
import { Component } from 'react'
import Navbar from 'components/Navbar'
import Custom from 'components/Custom'
import DataGrid from 'components/DataGrid'
import Browser from 'components/Browser/index'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DataGrid />
        <Browser />
      </div>
    )
  }
}
export default App
