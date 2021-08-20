import React, { Component } from 'react'
import CardContainer from './Containers/CardContainer'
import Header from './Containers/Header'
import Scroll from './Containers/Scroll'
import ErrorBoundry from './Containers/ErrorBoundry'
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
    const { robots, search } = this.state //destructure state to make app cleaner
    
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <>
         <Header handleSearch={this.handleSearch} search={search}/>
         <Scroll>
           <ErrorBoundry>
           <CardContainer robots={filteredRobots}/>
           </ErrorBoundry>
         </Scroll>
         
        
      </>
    )
  }
}

export default App