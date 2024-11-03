import React, { useState } from "react";
import "./App.css";
import { UseOfStateFullShareWithChildrenWithProps, UseOfStateFullShareWithProps } from "./Components/statefull-share";
import { MyWindow } from "./Components/hooks-replace-render-props";
import { UseScrollDetector } from "./Components/render-props-scroll";
import { MainComponent } from "./Components/memoization-chapter-5-useMemo-Usecallback";
import { AntiPattern, MainAntiPattern2 } from "./Components/antipattern-memoizing-props";
import { UseReactMemno } from "./Components/react-memo";

function App() {

  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button style={{margin: "20px", background: `red`, color: `white`, padding:"5px", borderRadius: 8, width: 300}} onClick={()=>setState(!state)}>On click to re-render components {state}</button>
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
      <h1>Anti pattern- memoizing props</h1>
      <AntiPattern />
      <h1>Anti pattern , when needs to memoizing props</h1>
      <MainAntiPattern2 />
      <h1>Ati pattern, problem when React.memo without hooks to cache</h1>
      <h2>Ati pattern, when we use React.memo with hooks to cache</h2>
      <UseReactMemno />
    </div>
  );
}

export default App;
