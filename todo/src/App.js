import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { addTodo } from "./actions";
import Todo from "./components/Todo";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>

        {this.props.todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(App);
