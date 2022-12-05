import * as React from "react";

interface IFromTestProps {}

const FromTest: React.FunctionComponent<IFromTestProps> = (props) => {
  const idForcus: string = React.useId();

  return (
    <>
      <h3>Form react use React.useId</h3>
      <label htmlFor={idForcus}>How to install</label>
      <input type="text" id={idForcus} />
    </>
  );
};

export default FromTest;
