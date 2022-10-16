import Sidebar from './components/Sidebar'
import { render } from "@testing-library/react";
import React, {Component, useState, TouchableOpacity, Text} from "react";
import image from "./worldmap.png"; 
import Popup from "./components/Popup"
import Data from "./Data"
import File from "./File"
import Data_out from "./Data_out"


function Menu() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <Data></Data>
        <br></br>
        <File></File>
      </div>

      <button style = {{position:"fixed", marginLeft: "8rem", marginBottom:"-15rem"}} onClick={() => setButtonPopup(true)}> 
            Explore</button>


      <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
          <Data_out></Data_out>
          
      </Popup>
    </div>
  )
}

export default Menu