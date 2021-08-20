import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import { robots } from './robots'

class App extends Component {
  render() {
    return (
      <>
        <CardContainer robots={robots}/>
      </>
    )
  }
}

export default App