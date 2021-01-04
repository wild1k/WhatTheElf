import React, { Component } from "react";
import "./styles.css";

function getCoords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  }
}

function Card(props) {
  let coords = getCoords(props.theta, props.radius)
  return (
    <div className="Card"  style={{ left:`${props.center.x}px`, top: `${props.center.y - coords.y}px`}}>


    </div>

  )
}
export class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 250,
      cards: [],
      theta: 0.0,
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount(){
    let centerWheel ={
      x: parseFloat(this.wheel.style.width) / 2,
      y: parseFloat(this.wheel.style.height) / 2,

    }
    let temp_cards = [];

    for (let i = 0; i < 8; i++ ) {
      temp_cards.push(
        <Card radius = {this.state.radius} theta={(Math.PI / 4) * i} center={centerWheel} key={`card_id`}/>
      );
    }
    this.setState({cards: temp_cards});
  }

  handleSpin = (event) => {
   
    clearTimeout(this.anim_id);
  let wheelCirm = 360;
    let spin_speed = (wheelCirm / 8) * 20;
         console.log(this.wheel.style.width); 
    this.temp_theta += spin_speed
        this.wheel.style.transitionDuration = '4.0s';
        this.wheel.style.transitionDelay = '0.0s';
        this.wheel.style.transform = `rotate(${this.temp_theta}deg)`;

        // need to add maintain words orientation

   this.anim_id = setTimeout(() => {
      this.setState({ theta: this.temp_theta });
    }, 1000);
  };

  render() {
    return (
      <div
        onWheel={this.handleSpin}
        ref={(ref_id) => (this.wheel = ref_id)}
        className="wheel"
        style={{ position: "fixed" }}
      ></div>
    );
  }
}

export default Wheel;
