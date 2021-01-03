import React, {Component} from "react";
import Wheel from "./Components/Wheel";


class Main extends Component {


  render(){
  return (
    <div className="Main" >
      
<h1 >Where has my little elf gone?</h1>
<Wheel />
<h2>Was he naughty or nice?</h2>
<Wheel />
    </div>
    
  )

  }

}

export default Main;
