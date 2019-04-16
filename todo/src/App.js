import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { addNewTodo } from "./actions";
import Todo from "./components/Todo";

class App extends Component {
  state = { 
    newTodo: ""
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => { 
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>

        {this.props.todos.map(todo => (
          <Todo todo={todo} />
        ))}

        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="New todo"
        />
        
        <button onClick={this.addTodo}>Add todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo }
)(App);
