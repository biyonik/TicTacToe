import GameHistory from '../models/GameHistory.js';

export default function NewGame({ setGamingBoard, setHistory, setCurrentMove}) {
  const history = new GameHistory(Array(9).fill(null), false);
  return (
    <button
      type='button'
      className='btn btn-outline-dark'
      onClick={() => {
        setGamingBoard((prevState) => {
          return [
            history
          ]
        });
        setCurrentMove(0);
      }}
    >
      Start New Game
    </button>
  )
}
