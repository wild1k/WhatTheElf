import React, { Component } from 'react';
import WheelCards from "./WheelCards";

export class Wheel extends Component {
    constructor(props){
        super(props)
        this.state = {
            radius: 0,
            cards: [],
        }
    }

    componentDidMount() {
        let wheelCenter = {
            x: parseFloat(this.wheel.style.width) / 2.0,
            y: parseFloat(this.wheel.style.height) / 2.0,

        }
        let newCard = [
            <WheelCards theta={0.0} radius={this.state.radius} center={wheelCenter} />

        ]

        this.setState({cards: newCard});
        }
    
    render() {
        return (
            <div ref={ref_id => this.wheel = ref_id} style={styles.wheel}>
                {this.state.cards}
            </div>
        )
    }
}

const styles = {
    wheel: {
        position: "absolute",
        top: '50%',
        left: "50%",   
        transform: "translate (-50%, -50%)",
        height: "500px",
        width: "500px",
        backgroundColor: "blue",
    }
}

export default Wheel;
