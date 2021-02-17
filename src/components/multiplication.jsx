import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

const FACTORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Multiplication = function () {
  let [playing, setPlaying] = useState(false);
  function startGame() {
    setPlaying(true);
  }


  function createBoard() {
    if (playing === true) {
      return (
           <div className="game-container">
               <div className="matching-board">board placeholder</div>
           </div>

      );
    } else {
      return (
        <div className="game-container">
          <div id="factors-container">
            <div>Choose factors to include</div>
            <div id="choose-factors">
            
               {FACTORS.map(factor => {
                   return (
                     <div id="factor">
                       <input
                         type="checkbox"
                         id={`factor${factor}`}
                         name={`factor${factor}`}
                         checked
                       />
                       <label for={`factor${factor}`}>{factor}</label>
                       <br></br>
                     </div>
                   );
               })} 
            </div>
 
            

          </div>
          <button className="game-button" onClick={startGame}>
            Start the Game!
          </button>
          <div className="matching-board">game not started</div>
        </div>
      );
    }
  }

  return (
    <div className="game-skeleton">
      <h1 className="game-header">Tia's Tricky Times Tables</h1>
      <p className="game-instructions">
        Match the equation to the solution to remove tiles from the board.
        Remove them all to see an image at the end!
      </p>
        {createBoard()} 
        {/* <canvas id="multiplication" height="690" width="990"></canvas> */}
        <Link to ="/">Pick a different game!</Link>
    </div>
  );
};

export default Multiplication;
