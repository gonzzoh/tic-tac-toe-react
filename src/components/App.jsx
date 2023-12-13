import { useState } from 'react'
import Board from './board'
function App() {
  const [name, setName] = useState('');

  const [player1, setPlayer1] = useState(["Player 1", []]);
  const [player2, setPlayer2] = useState(['Player 2', []]);

  const handleControlledSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    console.log(formData.entries())
    e.target.reset()
  };
  const handleChange = (e) => {
    const newVal = e.target.value;
    // if (e.target.id === player1) {
    //     setPlayer1(e.target.value);
    // } else if (e.target.id === player2) {
    //     setPlayer2(e.target.value);
    // }
    setName(prev => prev = newVal)
    console.log(newVal)
  }


  return (
    <>
      <form onSubmit={handleControlledSubmit}>
        <label htmlFor="name"></label>
        <select>
          <option value="player1">{player1}</option>
          <option value="player2">{player2}</option>
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
