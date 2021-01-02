import React, { Component } from 'react'

export class Wheel extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={styles.wheel}>
                
            </div>
        )
    }
}

const styles = {
    wheel: {
        position: "absolute",
        top: '50%',
        left: "50%",
        height: "500px",
        width: "500px",
        transform: "translate (-50%, -50%)",
        backgroundColor: "blue",
        borderRadius: "50%",


    }
}

export default Wheel;
