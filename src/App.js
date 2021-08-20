import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import Header from './Containers/Header'
import { robots } from './robots'

class App extends Component {
  render() {
    return (
      <>
         <Header/>
        <CardContainer robots={robots}/>
        
      </>
    )
  }
}

export default App