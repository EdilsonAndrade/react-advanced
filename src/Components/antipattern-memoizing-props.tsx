import { useCallback, useEffect } from "react"

export const AntiPattern = ()=>{
  const handleonClick = useCallback(()=>{
    console.log('Button clicked, useCallback here is useless, you can depreacte it on this case')
  },[])


  return (
    <button onClick={handleonClick}>Click me</button>
  )
}

export const AntiPattern2 = ({onMount}:{onMount:()=>void})=>{

  useEffect(()=>{
    onMount();
  },[onMount])

  return (
    <></>
  )
} 

export const MainAntiPattern2 = ()=>{
  const fetch = useCallback(()=>{
    console.log(' MainAntiPattern2 Component onMounted')
  },[])

  return (
    <AntiPattern2 onMount={fetch}/>
  )
}