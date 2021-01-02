import React from 'react'

function getCoords(theta, radius){
    return {
        x: Math.cos(theta) * radius,
        y: Math.sin(theta) * radius,
    }
}


function WheelCards(props) {
    let newCoords = getCoords(props.theta, props.radius);
    return (
        <div style={{...styles.cards, left: `${props.center.x + newCoords.x}px`, top:`${props.center.y - newCoords.y}px`}}>

        </div>
    )
}
const styles = {
    cards: {
        position: "absolute",
        top: '50%',
        left: "50%",
        transform: "translate (-50%, -50%)",
        height: "100px",
        width: "300px",
        backgroundColor: "yellow",
     


    }
}
export default WheelCards;

