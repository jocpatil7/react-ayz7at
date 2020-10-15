import React from "react";
import DisplayCounter from "./displayCounter";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0
    };
  }
  onIncrementClick = (value = 0) => {
    //console.log(this.state.counterValue)
    value = value + 1;
    this.setState({ counterValue: value });
    console.log(value);
    //alert("I am Increment Click " + value);
  };
  onDecrementClick = (value = 0) => {
    //console.log(this.state.counterValue)
    value = value - 1;
    this.setState({ counterValue: value });
    console.log(value);
    //alert("I am Decrement Click " + value);
  };
  render() {
    return (
      <React.Fragment>
        <DisplayCounter counterValue={this.state.counterValue} />
        <input
          type="button"
          value="Increment"
          onClick={value => this.onIncrementClick(this.state.counterValue)}
        />
        <br />
        <br />
        <input
          type="button"
          value="Decrement"
          onClick={value => this.onDecrementClick(this.state.counterValue)}
        />
      </React.Fragment>
    );
  }
}

export default Counter;
