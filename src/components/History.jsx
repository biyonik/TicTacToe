export default function History({ history, setHistory, setCurrentMove, currentMove, winner }) {
  const handleHistoryClick = (index) => {
    setCurrentMove(index);
    setHistory((prevState) => [
      ...prevState
    ]);
  };

  return (
    <div>
      <h3 className="history-title">History</h3>
      {history.length && (
        <ul>
          {history.map((_, index) => (
            <li key={index}>
              {
                <button disabled={winner} value={index} className={`${winner ? 'op-5': ''} ${index===currentMove ? 'active': ''} history-btn`} onClick={(e) => handleHistoryClick(index)}>
                  {
                    index === 0 ? 'Go to game start' : `Go to move #${index}`
                  }
                </button>
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
