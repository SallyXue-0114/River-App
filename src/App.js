import { render } from "@testing-library/react";
import React, {Component, useState, TouchableOpacity, Text} from "react";
import image from "./worldmap.png"; 
import Popup from "./components/Popup"
import Data from "./Data"
import File from "./File"
import Menu from "./Menu"


function App(){
    const [buttonPopup, setButtonPopup] = useState(false);
    
    const myStyle = {
      backgroundImage:`url(${image})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain", 
      width: '100vw', height: '100vh', 
      backgroundPosition: 'center',
    };

    return (
      <div className="App">
        <div style = {myStyle}>
          <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <h1>See major rivers in the world!</h1>
            
            <button style = {{position:"fixed", marginLeft: "65rem", marginBottom:"30rem"}} onClick={() => setButtonPopup(true)}> 
            Yenisei River</button>

            <button style = {{position:"fixed", marginLeft: "85rem", marginBottom:"-6rem"}} onClick={() => setButtonPopup(true)}> 
            Yangtze River</button>

            <button style = {{position:"fixed", marginLeft: "38rem", marginBottom:"-8rem"}} onClick={() => setButtonPopup(true)}> 
            Nile River</button>

            <button style = {{position:"fixed", marginLeft: "85rem", marginBottom:"-3rem"}} onClick={() => setButtonPopup(true)}> 
            Yellow River</button>

            <button style = {{position:"fixed", marginLeft: "-5rem", marginBottom:"-25rem"}} onClick={() => setButtonPopup(true)}> 
            Amazon River</button>

            <button style = {{position:"fixed", marginLeft: "-30rem", marginBottom:"-3rem"}} onClick={() => setButtonPopup(true)}> 
            Mississippi River</button>

          

          </div>
        </div>

        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
          <Menu></Menu>
          
        </Popup>
      </div>
    );
}


export default App;

