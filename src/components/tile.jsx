import React from 'react';

const Tile = function({input}) {
    return (
        <div className="tile" >
            {/* <h1>game tile</h1>  */}
            <div className="input">{input}</div>
        </div>
       
    )
}

export default Tile;