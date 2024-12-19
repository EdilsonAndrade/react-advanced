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