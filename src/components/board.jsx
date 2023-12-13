import { useState } from 'react'
import "../styles/board.css"

export default function Board(players) {
    const [curPlayer, setCurPlayer] = useState('X');
    // console.log(players)
    const handleClick = (e) => {
        let tile = e.target
        tile.textContent = curPlayer
        curPlayer === "X" ? tile.setAttribute('data-set-player', players.player1[0]) : tile.setAttribute('data-set-player', players.player2[0])
        setCurPlayer(curPlayer === 'X' ? 'O' : 'X')
        console.log(curPlayer, tile)
    }

    return (
        <>
            <h1>Game Board</h1>
            <section id="gameBoard">
                <div className="cell" id="1" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="2" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="3" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="4" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="5" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="6" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="7" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="8" data-set-player="" onClick={handleClick}></div>
                <div className="cell" id="9" data-set-player="" onClick={handleClick}></div>
            </section>
        </>
    )
}

