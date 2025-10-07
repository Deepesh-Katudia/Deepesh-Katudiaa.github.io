import { useMemo, useState } from "react";
import "./App.css";

const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

function calculateWinner(squares) {
  for (const [a,b,c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a,b,c] };
    }
  }
  return squares.every(Boolean) ? { player: null, line: null } : null;
}


function Square({ value, onClick, highlight }) {
  return (
    <button className={`square ${highlight ? "win" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}


function Board({ squares, onPlay, winningLine }) {
  function handleClick(i) {
    if (squares[i] || winningLine) return;
    onPlay(i);
  }


  return (
    <div className="board">
      {squares.map((val, i) => (
        <Square
          key={i}
          value={val}
          onClick={() => handleClick(i)}
          highlight={winningLine?.includes(i)}
        />
      ))}
    </div>
  );
}
