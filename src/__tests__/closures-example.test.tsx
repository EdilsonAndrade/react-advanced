/* eslint-disable testing-library/prefer-screen-queries */
import { ClosureWithRef, doSomething, doSomethingCached } from "../Components/closures-example"
import {fireEvent, render} from "@testing-library/react"
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

  test("when I click on button it will increase the value from 0 to 1 and show it",()=>{
    const {getByTestId, getByText} = render( <ClosureWithRef/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const result = getByTestId("closure")
    fireEvent.click(result)
    const textResult = getByText("1")
    expect(result).toBeDefined()
    expect(textResult?.innerHTML).toEqual("1")
  })
})