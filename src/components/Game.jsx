import { useState } from 'react';
import GameHistory from '../models/GameHistory.js';
import { GAME_TITLE, Player } from '../enums/constants.js';
import calculateWinner from '../helpers/winner.js';
import StatusMessage from './StatusMessage.jsx';
import NewGame from './NewGame.jsx';
import Board from './Board.jsx';
import History from './History';

export default function Game() {
  const [history, setHistory] = useState([new GameHistory(Array(9).fill(null), false)]);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const squares = gamingBoard.getHistorySquares();
  const isXNext = gamingBoard.getHistoryIsXNext();
  const winner = calculateWinner(squares);
  const { X, O } = Player;

  const handleSquareClick = async (position) => {
    if (winner || squares[position]) {
      return;
    }

    setHistory((currentHistory) => {
      const isTraversingHistory = currentMove + 1 !== currentHistory.length;
      const lastHistory = isTraversingHistory
        ? currentHistory[currentMove]
        : currentHistory[history.length - 1];

      const squares = [...lastHistory.squares];
      squares[position] = isXNext ? X.description : O.description;

      const base = isTraversingHistory
        ? currentHistory.slice(0, currentHistory.indexOf(lastHistory) + 1)
        : currentHistory;

      const _isXNext = !lastHistory.getHistoryIsXNext();
      const newHistory = new GameHistory(squares, _isXNext);
      return [...base, newHistory];
    });

    setCurrentMove((move) => move + 1);
  };

  return (
    <>
      <h1 className='text-center'>{GAME_TITLE}</h1>
      <div className='w-full min-h-screen d-flex flex-column justify-content-center align-items-center'>
        <StatusMessage
          winner={winner}
          squares={squares}
          isXNext={isXNext}
        />
        <NewGame
          setGamingBoard={setHistory}
          setHistory={setHistory}
          setCurrentMove={setCurrentMove}
        />
        <Board
          squares={squares}
          handleSquareClick={handleSquareClick}
        />
        <History
          history={history}
          setHistory={setHistory}
          setCurrentMove={setCurrentMove}
          currentMove={currentMove}
          winner={winner}
        />
      </div>
    </>
  );
}
