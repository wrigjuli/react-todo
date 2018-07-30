import React from 'react';
import ReactDOM from 'react-dom';


class InputLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
    }
  }

  handleTyping(event) {
    this.setState({
      typedText: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault;
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: '',
    })
  }

  render() {
    return (
      <div className="InputLine">
          <input type="text" name="" value = {this.state.typedText} onChange = {(event) => this.handleTyping(event)} placeholder = "task"/>
          <input type="submit" onClick={(event)=>this.handleSubmit(event)} value = "Add Todo"/>
      </div>
    )
  }
}

export default InputLine;
