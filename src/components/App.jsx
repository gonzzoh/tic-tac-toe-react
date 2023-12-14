import { useState } from 'react'
import Board from './board'
function App() {
  const [name, setName] = useState('');

  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState('Player 2');

  const handleControlledSubmit = async (e) => {
    e.preventDefault()
    // const formData = new FormData(e.target);
    // const obj = Object.fromEntries(formData);
    // console.log(e.target.value)
    // console.log(name)
    e.target.reset()
  };
  const handleChange = (e) => {
    const newVal = e.target.value;
    setName(prev => prev = newVal)
    
    if (e.target.value === player1) {
        setPlayer1(e.target.value);
    } else if (e.target.value === player2) {
        setPlayer2(e.target.value);
    }

    console.log(newVal)
  }

  return (
    <>
      <form onSubmit={handleControlledSubmit}>
        <label htmlFor="name"></label>
        <select>
          <option value="player1">{player1}: X</option>
          <option value="player2">{player2}: O</option>
        </select>
        <input id="name" value={name} onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <Board {...{ player1, player2 }}/>
    </>
  )
}
export default App
