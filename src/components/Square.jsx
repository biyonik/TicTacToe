const Square = ({value, onClick, className, children}) => {

  return (
    <button
      type={'button'}
      className={className}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
