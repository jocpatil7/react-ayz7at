import React from "react";
import "./style.css";

  export default function App() {
  return (
    <div>
      <Welcome name="Jyoti" />
       <Training value="React Training" />
    </div>
  );
}
function Welcome(props) {
  return <h1>Hello, {props.name}.</h1>;
}

function Training(props) {
  return <h2>Welcome to {props.value}.</h2>;
}

