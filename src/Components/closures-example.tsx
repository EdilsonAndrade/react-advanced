import React, { useCallback, useEffect, useRef } from "react";

let cached:any = {}
let prevState = "";
export function doSomething(value:string){
  // this is the same as useCallback and useMemo does - that is why it's important to use dependency inside the arrays
  if(!cached.current || prevState !== value){
    cached.current = ()=>{
      return value
    }
  }
  prevState = value;
  return cached.current
}

export function doSomethingCached(value:string){
 
    if(!cached.current){
      cached.current = ()=>{
        return value;
      }
    }
    return cached.current;
 
  
}

export const AnyComponent = ({count, onClick}:{count:number, onClick:()=>void})=>{
  return(
    <div data-testid="closure" onClick={onClick}>{count}</div>
  )
}

const AnyComponentMemoized = React.memo(AnyComponent)
export const ClosureWithRef = ()=>{
  const [count, setCount] = React.useState(0)
  const ref = useRef(()=>{})
  const onClick = useCallback(()=>{
    ref?.current?.();
  },[])

  useEffect(()=>{
    ref.current = ()=>{
      setCount(count+1)
    } 
  })
  return (
    <AnyComponentMemoized  count={count} onClick={onClick}/>
    )
}