import React from 'react';

const Tile = function({input}) {

    return (
        <button className="tile" key={input}>
            <div className="input">{input}</div>
        </button>
       
    )
}

export default Tile;