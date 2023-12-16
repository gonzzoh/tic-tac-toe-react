import { useState, useEffect } from 'react'
import GameOver from './GameOver'
import gameState from './GameState';
import "../styles/board.css"

export default function Board(players) {
    let ids = [...Array(9).keys()];
    const [gameStatus, setGameStatus] = useState(gameState.inProgress);
    const [boardData, setBoardData] = useState(Array(9).fill(null));
    const [curPlayer, setCurPlayer] = useState('X');
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    const checkWinner = (tiles, player, setGameStatus) => {
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
                tiles[a] === "X" ? setGameStatus(gameState.playerXWins) : setGameStatus(gameState.playerOWins);
                return;
            }
        }

        const draw = !tiles.includes(null);
        if (draw) {
            setGameStatus(gameState.draw);
        }
    }

    useEffect(() => {
        checkWinner(boardData, curPlayer, setGameStatus);
    }, [boardData]);

    const checkCell = (e) => {
        let tile = e.target
        let { dataset } = e.currentTarget

        dataset.setClicked === "false" ? tile.setAttribute("data-set-clicked", "true") : tile.setAttribute("data-set-clicked", "false");
        dataset.setClicked === "true" ? tile.setAttribute("disabled", true) : tile.setAttribute("disabled", false);
        tile.textContent = curPlayer

        setBoardData((prevBoardData) => {
            const newBoardData = [...prevBoardData];
            newBoardData[Number(tile.id)] = curPlayer;
            return newBoardData;
        });

        setCurPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    };

    const listCells = ids.map((id) => <button className="cell" id={id} key={id} data-set-clicked="false" disabled={false} onClick={checkCell}></button>);
    return (
        <>
            <h1>Game Board</h1>
            <section id="gameBoard">
                {listCells}
            </section >
            <GameOver gameState={gameStatus} />
        </>
    )
}

