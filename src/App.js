import { render } from "@testing-library/react";
import React, {Component, useState} from "react";
import image from "./worldmap.png"; 
import Popup from "./components/Popup"


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
            <button onClick={() => setButtonPopup(true)}>Open Popup
            </button>
          </div>
        </div>

        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
          <h3>My popup</h3>
          <p>information here</p>
        </Popup>
      </div>
    );
}


export default App;

