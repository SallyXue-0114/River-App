import { render } from "@testing-library/react";
import React, {Component} from "react";
import image from "./worldmap.png"; 


class App extends Component{
  render(){
    const myStyle = {
      backgroundImage:`url(${image})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain", 
      width: '100vw', height: '100vh', 
      backgroundPosition: 'center',
    };
    return (
      <div style = {myStyle}>
        <h1>See major rivers in the world!</h1>
      </div>
    );
  }
}

export default App;

