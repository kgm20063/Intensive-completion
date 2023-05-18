import { useState } from "react";

import * as S from "./styled.js";

function Main() {
  function Square({ onClick, value }) {
    return <S.Square onClick={onClick}>{value}</S.Square>;
  }

  function Board(props) {
    function renderSquare(i) {
      return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
    }

    return (
      <S.Div>
        <S.BoardRow>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </S.BoardRow>
        <S.BoardRow>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </S.BoardRow>
        <S.BoardRow>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </S.BoardRow>
      </S.Div>
    );
  }

  function Game() {
    const [history, setHistory] = useState([
      {
        squares: Array(9).fill(null),
      },
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
      const newHistory = history.slice(0, stepNumber + 1);
      const current = newHistory[newHistory.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = xIsNext ? "X" : "O";

      setHistory(newHistory.concat([{ squares: squares }]));
      setStepNumber(newHistory.length);
      setXIsNext(!xIsNext);
    }

    function jumpTo(step) {
      setStepNumber(step);
      setXIsNext(step % 2 === 0);
    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
      <S.Game>
        <S.GameBoard>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </S.GameBoard>
        <S.GameInfo>
          <S.Div>{status}</S.Div>
          <ol>{moves}</ol>
        </S.GameInfo>
      </S.Game>
    );
  }
  return <Game />;

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Main;
