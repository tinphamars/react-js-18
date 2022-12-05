import React from "react";
import ShowName from "./showname";

type PropsMemoization = {};
type StateMomoiztion = {
  number: number;
  username: string;
};

class Memoization extends React.Component<PropsMemoization, StateMomoiztion> {
  constructor(props: PropsMemoization) {
    super(props);
    this.state = {
      number: 10,
      username: "Tyn",
    };
  } 

  handleClick = (): void => {
    this.setState({ username: "Tyn" + Math.floor(Math.random() * 10) });
  };

  render(): React.ReactNode {
    console.log("Render parent");
    return (
      <>
        <h1>How to install {this.state.number}</h1>
        <ShowName name={this.state.username} />
        <button onClick={this.handleClick}>Set state</button>
      </>
    );
  }
}

export default Memoization;
