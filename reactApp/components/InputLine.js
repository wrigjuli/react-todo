import React from 'react';
import ReactDOM from 'react-dom';


class InputLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    }
  }

  inputTextFunc(event) {
    this.setState({
      task: event.target.value,
    })
  }

  render() {
    return (
      <div className="InputLine">
        <form>
          <input type="text" name="" value = {this.state.task} onChange = {(event) => this.inputTextFunc(event)} placeholder = "task"/>
          <input type="submit" onClick={this.props.submit} name="" value={this.state.task? this.state.task: "Add Todo"}/>
        </form>
      </div>
    )
  }
}

export default InputLine;
