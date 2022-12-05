import * as React from "react";
import FromTest from "./inputuseId";

export interface IUseIdProps {}

export default function UseIdTest(props: IUseIdProps) {
  return (
    <div>
      <h1>This is test useId</h1>
      <FromTest />
      <FromTest />
      <FromTest />
      <FromTest />
    </div>
  );
}
