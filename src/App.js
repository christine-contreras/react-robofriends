import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import Header from './Containers/Header'
import Scroll from './Containers/Scroll'
// import { robots } from './robots'

class App extends Component {

  state = {
    robots: [],
    search: ""
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(robots => this.setState({robots}))
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
         <Scroll>
           <CardContainer robots={filteredRobots}/>
         </Scroll>
         
        
      </>
    )
  }
}

export default App