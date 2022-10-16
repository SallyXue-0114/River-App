import React from 'react';
import './Data.css';
import image from "./Boto.png"

function Data_out() {
  return (
    <div>
      <section class = "section">
        <div class = "box-main">
          <div class = "firstHalf">
            <h1 class = "text-big">
              Boto🐬
            </h1>
            <p class = "text-small">
              Desriptions:
            </p>
            <p class = "text-small">
              1. Largest river dolphin
            </p>
            <p class = "text-small">
              2. Gray when young
            </p>
            <p class = "text-small">
              3. Pink and white when mature
            </p>
            <br></br>
              <img src = {image} width = {300} height = {225} alt = ""></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Data_out;