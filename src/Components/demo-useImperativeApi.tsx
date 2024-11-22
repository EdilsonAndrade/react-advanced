import { RefObject, useEffect, useImperativeHandle, useRef, useState } from "react";

type ApiRef ={
  focus:()=>void
  shake:()=>void
}

type InputProps ={
  onChange(e:React.ChangeEvent<HTMLInputElement>):void
  apiRef: RefObject<ApiRef>
}

const InputFiled = ({onChange,apiRef}:InputProps)=>{
  const inputRef = useRef<HTMLInputElement>(null);
  const [shake, setShake] = useState(false);

  useImperativeHandle(apiRef, ()=>{
    return {
      focus:()=>{
        inputRef?.current?.focus();
      },
      shake:()=>{
        setShake(true);
      }
    }
  })
  const className = shake ? 'shake' : '';

  return(
    <input className={className}  onAnimationEnd={()=>setShake(false)} ref={inputRef} onChange={onChange} />
  )
  
}

export const FormUseImperativeHandleApi = ()=>{
  const apiRef = useRef<ApiRef>(null);

  const [value, setValue] = useState('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);
  }

  const submit = ()=>{
    if(!value){
      apiRef?.current?.shake();
      apiRef?.current?.focus();
    }else{
      console.log(`value: ${value}`)
    }
  }
 
  return (
    <div style={{border: "3px solid red", margin: "30px"}}>
      <InputFiled onChange={handleChange} apiRef={apiRef} />
      <button onClick={submit} >Submit</button>
    </div>
  )
}