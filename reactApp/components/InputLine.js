import React from 'react';
import ReactDOM from 'react-dom';


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

export default InputLine;
