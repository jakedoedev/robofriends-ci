import React from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";

class Header extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="f2"> Robofriends </h1>
        <CounterButton color={"red"} />
        <CounterButton2 color={"red"} />
      </div>
    );
  }
}

export default Header;
