import React from 'react';

const Tile = function({input, onClick, id}) {

    return (
        <button className="tile" key={input} id={id} onClick={onClick}>
            <div className="input">{input}</div>
        </button>
       
    )
}

export default Tile;