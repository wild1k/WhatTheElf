import React from "react";
import { Wheel } from "./Wheel.js";
import "./styles.css";

export class WheelCover extends Wheel {
  constructor(props) {
    super(props);
    this.state = {
      theta: 0.0,
      isClicked: false,
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      this.prevState = !this.state.isClicked
    })
    return this.handleSpin(onwheel)
  }

  render() {
    return (
      <div
        onClick={() => this.handleClick()}
        ref={(ref_id) => (this.wheel = ref_id)}
        className="wheelSelect"
        style={{
          position: "fixed",
          top: "130px",
          left: "-5px",
          transform: `rotate(15deg)`,
          zIndex: 1,
        }}
      ></div>
    );
  }
}

export default WheelCover;
