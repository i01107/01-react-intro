import React from 'react'
import Todos from './Todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      task: null,
      name: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }))
  }

  render() {
    return (
      <div className="row pt-3">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
