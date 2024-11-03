import React from "react";
import "./App.css";
import { UseOfStateFullShareWithChildrenWithProps, UseOfStateFullShareWithProps } from "./Components/statefull-share";

function App() {
  return (
    <div className="App">
      <h1>Statefull with props</h1>
      <UseOfStateFullShareWithProps />
      <h1>Statefull with children with props</h1>
      <UseOfStateFullShareWithChildrenWithProps/>
    </div>
  );
}

export default App;
