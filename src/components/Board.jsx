import Square from './Square.jsx';

const Board = ({ squares, handleSquareClick }) => {
  const renderSquare = (position) => {
    return (
      <Square
        key={position}
        value={squares[position]}
        className={`square ${squares[position] && squares[position] === 'X' ? 'text-lightgreen' : 'text-lighttomato'}`}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className='board mt-2'>
      {
        Array(9).fill(null).map((_, position) => (
          position % 3 === 0 ? (
            <div key={position} className='board-row'>
              {
                Array(3).fill(null).map((_,p) => (
                  renderSquare(p+position)
                ))
              }
            </div>
          ) : null
        ))
      }
    </div>
  );
};

export default Board;
