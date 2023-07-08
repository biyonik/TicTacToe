import { useCallback } from 'react';
import { Player } from '../enums/constants.js';


export default function StatusMessage({ winner, squares, isXNext}) {
  const { X, O } = Player;
  const message = useCallback(() => {
    if (winner) {
      return `Winner is ${winner}`;
    } else if (squares.every((square) => square !== null)) {
      return 'Draw!';
    } else {
      return `Next player is ${isXNext ? X.description : O.description}`;
    }
  }, [winner, isXNext, X.description, O.description]);

  return (
    <>
      <h2 className={`${isXNext ? 'text-lightgreen' : 'text-lighttomato'} text-center`}>{message()}</h2>
    </>
  );
}
