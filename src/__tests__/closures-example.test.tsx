/* eslint-disable testing-library/prefer-screen-queries */
import { ClosureTryingUsingMemoize, ClosureWithRef, doSomething, doSomethingCached } from "../Components/closures-example"
import {fireEvent, getByText, queryByText, render} from "@testing-library/react"
describe("Closures", ()=>{
  test("Stale Closure - when I pass FIRST value and call the function will always return FIRST text", ()=>{

    const first = doSomethingCached("FIRST");
    const second = doSomethingCached("SECOND");

    expect(first()).toEqual("FIRST")
    expect(second()).toEqual("FIRST")
  })

  test("when I pass First, Second, Third values to doSomethingFuncion it will return the value passed", ()=>{
    const first = doSomething("FIRST");
    const second = doSomething("SECOND");
    const third = doSomething("THIRD");
    expect(first()).toEqual("FIRST");
    expect(second()).toEqual("SECOND");
    expect(third()).toEqual("THIRD");
  })

  test("when I click twice on button it will increase the value from 0 to 2 and show it",()=>{
    const {getByTestId, getByText} = render( <ClosureWithRef/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const result = getByTestId("closure")
    fireEvent.click(result)
    fireEvent.click(result)
    const textResult = getByText("2")
    expect(result).toBeDefined()
    expect(textResult?.innerHTML).toEqual("2")
  })
  
  test("ClosureTryingUsingMemoize - when I click it will persist value 1 and show that the React.Memo even with useCallBack the click will make the component re-render",()=>{
    //this function will tes
    const {getByTestId, queryByText, getByText} = render( <ClosureTryingUsingMemoize/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const result = getByTestId("closure")
    fireEvent.click(result)
    fireEvent.click(result)
    expect(result).toBeDefined()
    expect(queryByText("2")).not.toBeInTheDocument()
   
    expect(getByText("1")).toBeInTheDocument()
  })
})