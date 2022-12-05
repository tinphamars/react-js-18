import * as React from "react";

interface IReactMomoProps {
  value: number[];
}

const ReactMomoTest: React.FunctionComponent<IReactMomoProps> = (props) => {
  console.log("Use memo childrend");
  return (
    <>
      <h3>How to install react momo</h3>
      {props.value[0]}
    </>
  );
};

export default React.memo(ReactMomoTest);
