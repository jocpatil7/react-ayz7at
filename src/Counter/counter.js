import React from "react";

class Counter extends React.Component {

constructor(props){
  super(props)
this.state={
  counterValue : 0
}
}
  onIncrementClick =(value=0)=>{
    //console.log(this.state.counterValue)
    value=value+1;
    this.setState({counterValue : value})
    console.log(value);
    //alert("I am Increment Click " + value);
    }
  render() {
    return (
      <div>
      {this.state.counterValue>0 && 
        <p>Counter Value is {this.state.counterValue}</p>}
        <input type="button" value="Increment" onClick={ (value) => this.onIncrementClick(this.state.counterValue)}/>

        </div>
     
    );
  }
}

export default Counter;
