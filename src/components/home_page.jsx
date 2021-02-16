import React from "react";
import { Link } from "react-router-dom";

const Games = {
  times: {
    title: "Tia's Tricky Times Tables",
    description: "Pick the matching equation and solution",
  },
  div: {},
  long_div: {},
};
const Homepage = function () {
  return (
    <div id="home-page">
        <div id="page-header-container">
            <h1 className="page-header">Welcome to Tutor Tia's favorite math games!</h1>
            <h1 className="page-header">Pick a game!</h1>
        </div>
      <div id="game-select-container">
        <Link className="game-link" to="/multiply">
          <div className="game-tile">
            <div className="game-title">Tia's Tricky Times Tables</div>
            <div className="game-description">
              Match the multiplication equation with the correct answer to
              reveal a fun image!
            </div>
          </div>
        </Link>
        <Link to="/divide"
        className="game-link">
          <div className="game-tile">
            <div className="game-title">Division Match</div>
            <div className="game-description">
              Match the division equation with the correct answer to reveal a
              fun image!
            </div>
          </div>
        </Link>
        <Link className="game-link">
          <div className="game-tile">
            <div className="game-title">Long Division</div>
            <div className="game-description">
              Solve the long division problem!
            </div>
          </div>
        </Link>
        <Link className="game-link">
          <div className="game-tile">
            <div className="game-title">Strike It Out</div>
            <div className="game-description">
              Find the addition and subtraction pairs before they are all gone!
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
