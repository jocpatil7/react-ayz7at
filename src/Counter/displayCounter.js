import React from "react";

function DisplayCounter(props) {
  return (
    <React.Fragment>
      {props.counterValue > 0 ? (
        <p>Counter Value is {props.counterValue}</p>
      ) : (
        <p>Please click Increment Button to show the Positive values</p>
      )}
    </React.Fragment>
  );
}

export default DisplayCounter;
