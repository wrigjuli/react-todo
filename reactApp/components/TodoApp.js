import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine.js';
import TodoList from './TodoList.js';

const dummyData = [
  {taskText: 'take my cat for a walk', completed: false},
  {taskText: 'make dinner', completed: true},
  {taskText: 'create a database', completed: false},
  {taskText: 'go to tech meetup', completed: false},
  {taskText: 'try on VR headset', completed: true},
  {taskText: 'learn data structures and algorithms', completed: true},
  {taskText: 'learn datascience', completed: false},
  {taskText: 'learn cryptography', completed: false},
]


class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData,
    })
  }

  addTodo(typedText) {
    dummyData.push({taskText: typedText, completed: false});
    this.setState({
      todos: dummyData,
    })
  }

  render() {
    return (
      <div>
        <InputLine submit= {(typedText) => this.addTodo(typedText)}/>
        <TodoList todos = {this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
