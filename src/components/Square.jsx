const Square = ({value, children}) => {
  return (
    <button type={'button'} className="square">
      {value}
    </button>
  );
};

export default Square;
