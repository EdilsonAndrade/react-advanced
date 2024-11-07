import React, { useState, useEffect } from "react";
const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};
export const ReallySlowComponet = () => {
    wait(700)
  return <></>;
};
export const MoveStateDownProblem = () => {
  //here I have a component where use an state to do something
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Move statedown Problem</h1>
      <button onClick={() => setShowModal(!showModal)}>Show modal</button>
      {showModal && <h2>Modal</h2>}
      <ReallySlowComponet />
    </div>
  );
};
export const MoveStateDownFix = () => {
 

  return (
    <div>
      <h1>Move statedown Example fixed</h1>
      {/* basically I moved all the state to the modal component itself and rendered it here, doing that it wont re=render the slowcomponent */}
      <MyModal />

      <ReallySlowComponet />
    </div>
  );
};

export const MyModal = ()=>{
   //here I have a component where use an state to do something but not at the parent compoennt so this will not rerender the ReallySlowComponet
   const [showModal, setShowModal] = useState(false);
  return(
    <div>
      <button onClick={() => setShowModal(!showModal)}>Show modal</button>
      {showModal && <h2>Modal</h2>}
    </div>
  )
}