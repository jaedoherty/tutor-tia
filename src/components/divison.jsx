import React from 'react';
import {Link} from "react-router-dom";

const Division = function() {
    return (
      <div className="division-skeleton">
        <h1>Division Matching</h1>
        <Link to="/">Pick a different game!</Link>
      </div>
    );
}
// should this be the same as the mult component?
export default Division
;