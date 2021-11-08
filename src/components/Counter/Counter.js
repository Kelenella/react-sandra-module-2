const Counter = ({ value, handleDecrement, handleIncrement }) => {
  return (
    <div className="counter">
      <button onClick={handleDecrement} className="counterBtn">
        -
      </button>
      <p>{value}</p>
      <button onClick={handleIncrement} className="counterBtn">
        +
      </button>
    </div>
  );
};

export default Counter;
