import React, { useCallback, useEffect } from "react";

const Child = ({ data, onChange, showButton}:{data: any, onChange: any, showButton?:boolean}) => {

  useEffect(()=>{
    console.log(`Child re-render`)
  })
  return (
   <div>
    {showButton && <button onClick={onChange}>Handle on change</button>}
   </div>
  )
}
const ChildMemo = React.memo(Child);

export const UseReactMemno = ()=>{
  const [state, setState] = React.useState(1);
  
  const handleChange = useCallback(()=>{
    console.log(`this is on change`)
  },[])
  return (
    <>
    <div>State = {state}</div>
    <Child data={state} onChange={handleChange} />
    <ChildMemo data={state} onChange={handleChange} showButton={true}/>
      <button onClick={()=>setState(state+1)}>Update state</button>
    </>
  )
}