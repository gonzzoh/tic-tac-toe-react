// import { useState } from 'react'
import Cells from './cells'
import "../styles/board.css"

export default function Board(players) {

    const checkBoard = (e) => {
        // let cells = document.querySelectorAll('.cell');
        // cells.map((cell) => {
        //     cell.getAttribute('data-set-player')
        // })
        console.log('board check', players)
    }

    return (
        <>
            <h1>Game Board</h1>
            <section id="gameBoard" onClick={checkBoard}>
                <Cells />
            </section >
        </>
    )
}

