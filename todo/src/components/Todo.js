import React from "react";

export default props => (
  <div className="todo">
    <h4>
      {props.todo.name} {props.todo.completed && <i class="fas fa-check" />}
    </h4>
  </div>
);
