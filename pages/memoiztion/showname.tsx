import * as React from "react";

interface ShowNameProp {
  name: string;
}

const ShowName: React.FunctionComponent<ShowNameProp> = (props) => {
  console.log("Render children");
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

export default React.memo(ShowName);
