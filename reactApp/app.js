import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  'take my cat for a walk',
  'make dinner',
  'create a database',
  'go to tech meetup',
  'try on VR headset',
  'review data structures and algorithms',
  'learn datascience'
]

// class InputLine extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//
//     )
//   }
// }

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li> <button>x</button> {this.props.task} </li>
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

// class TodoApp extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//
//     )
//   }
// }

ReactDOM.render(<TodoList/>, document.getElementById('root'));
