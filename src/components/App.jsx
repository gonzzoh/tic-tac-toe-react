import { useState } from 'react'
import Board from './board'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('');

  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState('Player 2');

  const handleControlledSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log("input:", obj)
    e.target.reset()
  };
  const handleChange = (event) => {
    const newVal = event.target.value;
    // if (event.target.id === player1) {
    //     setPlayer1(event.target.value);
    // } else if (event.target.id === player2) {
    //     setPlayer2(event.target.value);
    // }
    setName(prev => prev = newVal)
    console.log(event.target.value)
  }


  return (
    <>
      <form onSubmit={handleControlledSubmit}>
        <label htmlFor="name"></label>
        <select>
          <option value="player1">{player1}</option>
          <option value="player2">{player2}</option>
        </select>
        <input id="name" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
