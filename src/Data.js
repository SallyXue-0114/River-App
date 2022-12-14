import React from 'react';
import './Data.css';
import image from "./amazon.png"

function Data() {
  return (
    <div>
      <section class = "section">
        <div class = "box-main">
          <div class = "firstHalf">
            <h1 class = "text-big">
              Amazon River
            </h1>
            <p class = "text-small">
              Basic informations:
            </p>
            <p class = "text-small">
              Longitude: -50.089443E
            </p>
            <p class = "text-small">
              Latitude: 0.707778N
            </p>
            <p class = "text-small">
              Oriiginates in Peru, meanders through nine South America countries
            </p>
            <br></br>
              <img src = {image} width = {300} height = {225} alt = ""></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Data;
