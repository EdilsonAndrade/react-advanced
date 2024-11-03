import { useEffect, useState } from "react";

export const useResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function onResize() {
      const width = window.innerWidth;
      setWidth(width);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    width,
  };
};


export const MyWindow = ()=>{
  const {width} = useResizeWindow();
  return (
    <>
    {width > 650 ? <div>{`Widht is > 650 ${width} valor `}</div>: <div>{`Widht is < 650 ${width} valor = `}</div>}  
    </>
  )
}