import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import Header from './Containers/Header'
import { robots } from './robots'

class App extends Component {

  state = {
    robots: robots,
    search: ""
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <>
         <Header handleSearch={this.handleSearch} search={this.state.search}/>
         <CardContainer robots={filteredRobots}/>
        
      </>
    )
  }
}

export default App