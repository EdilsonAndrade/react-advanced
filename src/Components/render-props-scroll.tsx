import React, { ReactElement, useState } from "react";

const SomeBlock = () => <div style={{ background: 'salmon', width: 600, padding: 20, position: 'sticky', top: 10 }}>Some block</div>;

type ScrollDetectorProps = {
  children: (width: number) => ReactElement;
};
const ScrollDetector = ({ children }: ScrollDetectorProps) => {
  const [scroll, setScroll] = useState(0);

  return (
    <div className="scrollable-block" onScroll={(e) => setScroll(e.currentTarget?.scrollTop)}>
      {children(scroll)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export const UseScrollDetector = ()=>{
  return (
    <>
      Scroll the content area below for the block to appear
      <br /> <br />
      <ScrollDetector>
        {(scroll) => {
          return <>{scroll > 30 ? <SomeBlock /> : null}</>;
        }}
      </ScrollDetector>
    </>
  );
}