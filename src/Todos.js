import React, { Component } from 'react'

class Todos extends Component {
  render() {
    return (
      <div className="col-12">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed ?</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.todos.map((todo, index) => (
                <tr key={index} className={todo.completed ? "table-success" : ""}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? "v" : "x"}</td>
                  <td><button className="btn btn-sm btn-primary">Edit</button></td>
                  <td><button className="btn btn-sm btn-danger">Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Todos