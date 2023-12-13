// import { useState } from 'react'
import "../styles/board.css"

export default function Board() {
    const handleClick = (e) => {
        console.log(e.target.id)
    }
    return (
        <>
            <h1>Game Board</h1>
            <section id="gameBoard">
                <div className="cell" id="1" onClick={handleClick}>1</div>
                <div className="cell" id="2" onClick={handleClick}>2</div>
                <div className="cell" id="3" onClick={handleClick}>3</div>
                <div className="cell" id="4" onClick={handleClick}>4</div>
                <div className="cell" id="5" onClick={handleClick}>5</div>
                <div className="cell" id="6" onClick={handleClick}>6</div>
                <div className="cell" id="7" onClick={handleClick}>7</div>
                <div className="cell" id="8" onClick={handleClick}>8</div>
                <div className="cell" id="9" onClick={handleClick}>9</div>
            </section>
        </>
    )
}