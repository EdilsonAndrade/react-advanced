import { useCallback, useEffect, useMemo, useState } from 'react';


export const AnyComponent = ()=>{
  const [state, setState] = useState(1);

  const doSomething = ()=>{
    console.log('do something will be also print on mount, even is inside callback');
  }

  // in this case it will be called the doSomething function on mount
  const submitDoSomething = useCallback(doSomething,[])
 const submitDoDomethingOnlyOnclick = useCallback(()=>{
  console.log('only on click do something will be printed on console bc its correct implemented');
 },[])

  
  const submitNormal = () => {
    console.info('submit some data here - normal');
  };

  const submitCallback = useCallback(() => {
    console.info('submit some data here - useCallback');
  }, []);

  const submitMemo = useMemo(
    () => () => {
      console.info('submit some data here - useMemo');
    },
    [],
  );

  useEffect(()=>{
    submitDoSomething() 
  },[submitDoSomething])

  useEffect(() => {
    console.info('This will be triggered every re-render');
  }, [submitNormal]);

  useEffect(() => {
    console.info('This will be triggered only on mounting');
  }, [submitCallback, submitMemo]);

  return (
    <>
      Examples of a function non-memoized and memoized via useCallback or useMemo
      <br />
      <br />
      <button onClick={() => setState(state + 1)}>Click to trigger re-render</button>
      <br />
      <br />
      <button onClick={submitNormal}>Click to trigger normal submit</button>
      <button onClick={submitCallback}>Click to trigger submit from useCallback</button>
      <button onClick={submitMemo}>Click to trigger submit from useMemo</button>
      <button onClick={submitDoDomethingOnlyOnclick} >Do something on click</button>
    </>
  );
}
export const MainComponent = ()=>{
  const [changeValue, setChangeValue] = useState<number>(0);
  return (
    <div>
      <button onClick={()=>setChangeValue(changeValue +1)}>Change value to {changeValue} on main component state, will reflect on other components</button>
      
      <div>
      <AnyComponent/>
      </div>
    </div>
  )
}