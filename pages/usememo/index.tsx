import * as React from "react";
import TestUseCallback from "./testuseCallback";
import ReactMomoTest from "./testUseMemo";

export interface IUseMemoProps {}

export default function UseMemo(props: IUseMemoProps) {
  React.useMemo(() => {}, []);
  const [number, setNumber] = React.useState(1);

  const handleClick = React.useCallback(() => {
    console.log("How to install");
  }, []);

  const handelRedner = (): void => {
    setNumber((pre) => pre + 1);
  };

  const valueMemo = React.useMemo(() => [1, 2, 3], []);

  return (
    <>
      <h1>State of number: {number}</h1>
      <TestUseCallback handleClick={handleClick} />
      <button onClick={handelRedner}>Re-render</button>
      <ReactMomoTest value={valueMemo} />
    </>
  );
}
