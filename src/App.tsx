import React from "react";
import "./App.css";
import { UseOfStateFullShareWithChildrenWithProps, UseOfStateFullShareWithProps } from "./Components/statefull-share";
import { MyWindow } from "./Components/hooks-replace-render-props";

function App() {
  return (
    <div className="App">
      <h1>Statefull with props</h1>
      <UseOfStateFullShareWithProps />
      <h1>Statefull with children with props</h1>
      <UseOfStateFullShareWithChildrenWithProps/>
      <h1>Statefull Hooks replaces render with props</h1>
      <MyWindow/>
    </div>
  );
}

export default App;
