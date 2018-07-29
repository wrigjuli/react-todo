import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.js';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((datum)=>{
          return (
            <Todo task = {datum} />
          )
        })}
      </ul>
    )
  }
}

export default TodoList;
