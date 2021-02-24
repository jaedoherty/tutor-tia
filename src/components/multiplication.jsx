import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

const FACTORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Multiplication = function () {
  let [playing, setPlaying] = useState(false);
  let [factors, setFactors] = useState([]);
  console.log(factors)
  function startGame() {
    setPlaying(true);
  }

  function chooseAllFactors() {
    // if (factors.checked === true) {
    //   setFactors({nums: [], checked: false})
    // } else {
      setFactors(FACTORS)
    }
  // }
  function chooseAllButOne() {
    // if (factors.checked === true) {
    //   setFactors({ nums: [], checked: false });
    // } else {
      let newFactors = FACTORS.slice(1)
      setFactors(newFactors)
  //   }
  }

  function clearFactors() {
   setFactors([]); 
  }

  function chooseAFactor(factor) {
    return () => {


      console.log("choose a factor", factor)
      // let allFactors = factors;
      if (Object.values(factors).includes(factor)) {
        let idx = Object.values(factors).indexOf(factor);
        let newFactors = Object.values(factors).splice(idx)
        console.log("new", newFactors, idx)
        setFactors(newFactors)
      } else {
        let newFactors = Object.values(factors);
        newFactors.push(factor);
        setFactors(newFactors)
      }
  }
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
                         key={factor}
                         id={`factor${factor}`}
                         name={`factor${factor}`}
                        //  checked={true}
                         onChange={chooseAFactor(factor)}
                       />
                       <label for={`factor${factor}`} key={`${factor}label`}>{factor}</label>
                       <br></br>
                     </div>
                   );
               })} 
            </div>
 
               <button className="factor-button" onClick={chooseAllFactors}>Choose All Factors</button>
               <button className="factor-button" onClick={chooseAllButOne}>Choose All Factors But 1</button>
               <button className="factor-button" onClick={clearFactors}>Clear All Factors</button>

          </div>
          <button className="game-button" onClick={startGame}>
            Start the Game!
          </button>
          <div className="matching-board">game not started</div>
        </div>
      );
    }
  }


  // function chooseFactors(factor) {
  //   let factorEl = document.getElementById(`factor${factor}`);
  //   console.log(factorEl);
  //   if (factorEl.checked === true) {
  //     let newFactors = factors;
  //     newFactors.push(factor);
  //     setFactors(newFactors);
  //   } else {
  //     let idx = factors.indexOf(factor);
  //     let newFactors = factors.splice(idx, 1);
  //     setFactors(newFactors);
  //   }
  // }

  return (
    <div className="game-skeleton">
      <h1 className="game-header">Tia's Tricky Times Tables</h1>
      <p className="game-instructions">
        Match the equation to the solution to remove tiles from the board.
        Remove them all to see an image at the end!
      </p>
        {createBoard()} 
        {/* <canvas id="multiplication" height="690" width="990"></canvas> */}
        <Link to ="/" className="game-button">Pick a different game!</Link>
    </div>
  );
};

export default Multiplication;
