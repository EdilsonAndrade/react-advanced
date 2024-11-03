import React from "react";
import "./App.css";
import { UseOfStateFullShareWithChildrenWithProps, UseOfStateFullShareWithProps } from "./Components/statefull-share";
import { MyWindow } from "./Components/hooks-replace-render-props";
import { UseScrollDetector } from "./Components/render-props-scroll";
import { MainComponent } from "./Components/memoization-chapter-5-useMemo-Usecallback";

function App() {
  return (
    <div className="App">
      <h1>Stateful with props</h1>
      <UseOfStateFullShareWithProps />
      <h1>Stateful with children with props</h1>
      <UseOfStateFullShareWithChildrenWithProps/>
      <h1>Stateful Hooks replaces render with props</h1>
      <MyWindow/>
      <h1>Stateful render props on scrolling </h1>
      <UseScrollDetector />
      <h1>Memoization, useMemo, useCallback, useEffect on chapter 5</h1>
      <MainComponent/>
    </div>
  );
}

export default App;
