import { doSomething, doSomethingCached } from "../Components/closures-example"

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
})