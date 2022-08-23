import { useState } from "react";
import "./styles.css";

export default function App() {
  const [buttons, setButtons] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  const handleClick = (ind) => {
    if (CalculateWinner(buttons) || buttons[ind]) {
      return;
    }
    buttons[ind] = flag ? "X" : "O";
    setFlag(!flag);
    setButtons(buttons);
  };

  const CalculateWinner = (buttons) => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i];
      if (buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return buttons[a];
      }
    }
    return null;
  };
  let status;
  const winner = CalculateWinner(buttons);
  if (winner) {
    status = winner;
  }
  const handleReset = () => {
    setFlag(true);
    setButtons(Array(9).fill(null));
  };
  return (
    <>
      <div className="App">
        {buttons.map((el, ind) => (
          <button
            className="square-btn"
            key={Math.random() * 1400000}
            value={el}
            onClick={() => handleClick(ind)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="winner">Winner: {status}</div>
      <button className="btn" onClick={handleReset}>
        RESET THE GAME
      </button>
    </>
  );
}
