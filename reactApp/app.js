import React from 'react';
import ReactDOM from 'react-dom';

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

class InputLine extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="InputLine">
        <input type="text" name="" value="" placeholder = "task"/>
        <input type="submit" name="" value="Add todo"/>
      </div>
    )
  }
}

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li> <button>x</button> {this.props.task.completed? this.props.task.taskText: <strike> {this.props.task.taskText} </strike>} </li>
    )
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul>
        {dummyData.map((datum)=>{
          return (
            <Todo task = {datum} />
          )
        })}
      </ul>
    )
  }
}

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
  render() {
    return (
      <div>
        <InputLine/>
        <TodoList todos = {this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));
