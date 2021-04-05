import React from 'react'
import Todos from './Todos'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }

    this.deleteTodo = this.deleteTodo.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }))
  }

  deleteTodo = (idx) => {
    let newTodos = [...this.state.todos]

    newTodos.splice(idx, 1)

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="row pt-3">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
