import React,{ useEffect, useState } from "react";
export const StatefullShareWithProps = ({changeWidth}:{changeWidth:(width:number)=>void}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
   function onResize(){
    const width = window.innerWidth;
     changeWidth(width)
     setWidth(width)
   }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [changeWidth])

  return (
    <>
    
    </>
  )  

}

export const UseOfStateFullShareWithProps = ()=>{
  const [width, setWidth] = useState(0);

  return (
    <>
    <StatefullShareWithProps changeWidth={setWidth}/>
    {width > 650 ? <div>{`Widht is > 650 ${width}`}</div>: <div>{`Widht is < 650 ${width}`}</div>}  
    </>
  )
}


export const StatefullShareWithChildrenProps = ({children}: {children: (windowWidth: number, isTrue: boolean) => React.ReactNode}) => {
  const [windowWidth, setWidth] = useState<number>(0);
  const [isTrue, setIsTrue] = useState<boolean>(false);

  useEffect(() => {
   function onResize(){
    const width = window.innerWidth;
     setWidth(width)
     setIsTrue(false)
     if(width > 650){
       setIsTrue(true)
     }
   }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return <>{children(windowWidth,isTrue)}</>

}

export const UseOfStateFullShareWithChildrenWithProps = ()=>{

  return (
    <>
    <StatefullShareWithChildrenProps>
      {(windowWidth:number, isTrue: boolean)=>(
        <>
          {windowWidth > 650 ? <div>{`Widht is > 650 ${windowWidth} valor ${isTrue}`}</div>: <div>{`Widht is < 650 ${windowWidth} valor = ${isTrue}`}</div>}  
        </>
      )}
    </StatefullShareWithChildrenProps>
   
    </>
  )
}