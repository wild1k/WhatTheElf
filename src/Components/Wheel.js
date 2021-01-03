import React, { Component } from "react";
import "./styles.css";
// import WheelCards from "./WheelCards.js";

export class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theta: 0.0,
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
  }



  handleScroll = (event) => {
    clearTimeout(this.anim_id);
    this.temp_theta += event.deltaY;
    this.wheel.style.transform = ` rotate(${this.temp_theta * 7}deg)`;
    setTimeout(() => {
      this.setState({ theta: this.temp_theta });
    }, 1000);
  };

  render() {
    return (
      <div
        onWheel={this.handleScroll}
        ref={(ref_id) => (this.wheel = ref_id)}
       className="wheel"
      >
      </div>
    );
  }
}

// const styles = {
//   wheel: {
//     height: "400px",
//     width: "400px",
//     borderRadius: "50%",
//     backgroundImage: `conic-gradient(red 0% 10%, orange 10% 20%, yellow 20% 30%, aqua 30% 40%, green 40% 50%, white 50% 60%,  pink 60% 70%, blue 70% 80%, indigo 80% 90%, violet 90% 100%)`,
//     top:"30%",
//     left: "10%",
// },

// };

export default Wheel;
