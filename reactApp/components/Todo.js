import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li> <button
        onClick = {() =>this.props.xClick()}>x</button> {!this.props.task.completed? this.props.task.taskText: <strike> {this.props.task.taskText} </strike>} </li>
    )
  }
}

export default Todo;
