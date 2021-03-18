import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Strike = function () {
  const [canvas, setCanvas] = useState("")
    // useEffect(() => {setCanvas({canvas: document.getElementById("strike-canvas")})
    if (canvas = "") {
      return null
    } else {
      
      return (
        <div id="strike-game">
          <div id="strike-instruction">
            <h1>Strike it Out</h1>
            <br/>
            <div>First, choose which operation you are testing.</div>
            <br/>
            <div>Then, click on two numbers on the numberline.</div>
            <br/>
            <div>Next, select the correct solution to the equation you have put together!</div>
            <br/>
            <div>If you got the answer correct, the numbers you selected cannot be selected again in the same game.</div>
          </div>
          <canvas id="strike-canvas"></canvas>
          <Link to="/">Pick a different game!</Link>
        </div>
      );
    }
  

  }
//     )
// }

export default Strike;
