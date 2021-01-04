import React, { Component } from "react";
import WheelCover from "./Components/WheelCover";
import Wheel from "./Components/Wheel";
import "./Components/styles.css";

class Main extends Component {
  render(props) {
    return (
      <div className="Main">
        <h1>Where has my little elf gone?</h1>
        <WheelCover onClick={this.props.WheelCover}>
          <Wheel  />
        </WheelCover>

        <h2>Was he naughty or nice?</h2>
        <Wheel />
      </div>
    );
  }
}

export default Main;
