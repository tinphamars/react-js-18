import * as React from "react";

interface ITestUseMemoProps {
  handleClick: () => void;
}

const TestUseCallback: React.FunctionComponent<ITestUseMemoProps> = (props) => {
  console.log("Callback children");
  return (
    <>
      <button onClick={props.handleClick}>Test useMemo</button>
    </>
  );
};

export default React.memo(TestUseCallback);
