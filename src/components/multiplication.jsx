import React from "react";
import Tile from "./tile";
import { useState } from "react";
import { Link } from "react-router-dom";

const FACTORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Multiplication = function () {
  let [playing, setPlaying] = useState(false);
  let [factors, setFactors] = useState(FACTORS.slice(1));
  // console.log(factors);
  function startGame() {
    setPlaying(true);
  }

  function chooseAllFactors() {
    var checkboxes = document.getElementsByClassName("factor-box");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
    console.log("all", checkboxes);
    setFactors(FACTORS);
  }

  function chooseAllButOne() {
    var checkboxes = document.getElementsByClassName("factor-box");
    checkboxes[0].checked = false;
    for (let i = 1; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
    console.log("all", checkboxes);
    let newFactors = FACTORS.slice(1);
    setFactors(newFactors);
  }

  function clearFactors() {
    var checkboxes = document.getElementsByClassName("factor-box");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
    // console.log("all", checkboxes);
    setFactors([]);
  }

  function chooseAFactor(factor) {
    return () => {
      // console.log("choose a factor", factor);
      if (Object.values(factors).includes(factor)) {
        let idx = Object.values(factors).indexOf(factor);
        let newFactors = Object.values(factors);
        newFactors.splice(idx);
        console.log("new", newFactors, idx);
        setFactors(newFactors);
      } else {
        let newFactors = Object.values(factors);
        newFactors.push(factor);
        setFactors(newFactors);
      }
    };
  }

  function populateBoard(size) {
    let count = 0;
    let tiles = [];

    let solutions = {};


    while (tiles.length < size) {
      let factor1 = Math.ceil(Math.random() * Math.max(...factors))
      let factor2 = Math.ceil(Math.random() * Math.max(...factors))
      let equation = `${factor1} x ${factor2}`; 
      let product = `${factor1 * factor2}`
      solutions[equation] = product;
      tiles.push(<Tile input={equation}/>);
      tiles.push(<Tile input={product}/>);
    }
    let shuffled = tiles
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    return shuffled;
  }

  function createBoard() {
    if (playing === true) {
      return (
        <div className="game-container">
          <div className="matching-board">{populateBoard(18)}</div>
        </div>
      );
    } else {
      return (
        <div className="game-container">
          <div id="factors-container">
            <div>Choose factors to include</div>
            <div id="choose-factors">
              {FACTORS.map((factor) => {
                return (
                  <div id="factor">
                    <input
                      className="factor-box"
                      type="checkbox"
                      key={factor}
                      id={`factor${factor}`}
                      name={`factor${factor}`}
                      onChange={chooseAFactor(factor)}
                    />
                    <label for={`factor${factor}`} key={`${factor}label`}>
                      {factor}
                    </label>
                    <br></br>
                  </div>
                );
              })}
            </div>
            <div id="factor-button-container">
              <button className="factor-button" onClick={chooseAllFactors}>
                Choose All Factors
              </button>
              <button className="factor-button" onClick={chooseAllButOne}>
                Choose All Factors But 1
              </button>
              <button className="factor-button" onClick={clearFactors}>
                Clear All Factors
              </button>
            </div>
            <button id="start-game" className="game-button" onClick={startGame}>
              Start the Game!
            </button>
            <div className="matching-board">game not started</div>
          </div>
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
      <Link to="/">
        <button className="game-button">Pick a different game!</button>
      </Link>
    </div>
  );
};

export default Multiplication;
