import React from 'react';
import {Link} from 'react-router-dom'

const Strike = function() {
    return (
      <div>
        <h1>Strike it Out</h1>
        <Link to="/">Pick a different game!</Link>
      </div>
    );
}

export default Strike;