import React, { useCallback, useMemo } from "react"
import { createContext, useContext, useEffect, useState } from "react"

const ExampleContext = createContext({
  isExpanded: false,
  toggle: () => { },
  open: () => { },
  close: () => { }
})
export const ExampleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggle = useCallback(() => setIsExpanded(!isExpanded), [isExpanded])
  const open = useCallback(() => {
    setIsExpanded(true);
  }, []);
  const close = useCallback(() => {
    setIsExpanded(false);
  }, []);
  const value = useMemo(() => { return { isExpanded, toggle, close, open } }, [isExpanded, toggle, open, close])
  return (
    <ExampleContext.Provider value={value}>
      {children}
    </ExampleContext.Provider>
  )
}

const useExampleContext = () => useContext(ExampleContext)

const withExpand = (Component: any) => {
  const ComponentMemo = React.memo(Component)
  return (props: any) => {
    const { open , isExpanded} = useExampleContext()
    
    return <ComponentMemo {...props} toggleExpand={open}  />
  }

}
export const MainPageContextSelector = withExpand(({ toggleExpand }: { toggleExpand: () => void }) => {


  useEffect(() => {
    console.log('MainPage re-rendered')
  })
  return (
    <div style={{ border: "1px solid red" }}>
      <div>

        <button onClick={toggleExpand}>Click here, when it's NOT EXPANDED and you will only see Child re-rendered on console</button>
      </div>
      <ChildTwo />
      <Child />

    </div>
  )
})

export const Layout = ({children}:{children: React.ReactNode})=>{

  return (
    <div style={{border: "3px solid blue", backgroundColor: "#ddffaa5e"}}>
    <ExampleProvider>
      {children}
    </ExampleProvider>
    </div>
  )
}
const Child = () => {
  const { isExpanded, toggle } = useExampleContext()
  useEffect(() => {
    console.log('Child re-rendered')
  })

  return (
    <div>
      {isExpanded ? "Expanded" : "Not Expanded"}
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}


const ChildTwo = () => {
  useEffect(() => {
    console.log('ChildTwo re-rendered')
  })

  return (
    <div>
     ChildTwo
    </div>
  )
}
