import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick = {() =>this.props.xClick()}>x</button>
        <li onClick = {() => this.props.toggleTodo()}>  {!this.props.task.completed?
          this.props.task.taskText:
          <strike> {this.props.task.taskText} </strike>} </li>
      </div>
    )
  }
}

export default Todo;
