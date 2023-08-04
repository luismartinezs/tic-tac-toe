import { produce } from "immer";
import { Board } from "@/components/Board";
import { TPlayer } from "@/types";
import { useState } from "react";
import { History } from "@/components/History";

const initSquares = Array(9).fill(null);
const initPlayer: TPlayer = "X";

function hasWon(squares: Array<string | null>) {
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

function getOpponent(player: TPlayer) {
  return player === "X" ? "O" : "X";
}

export function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([initSquares]);
  const [step, setStep] = useState(0);
  const player = step % 2 === 0 ? initPlayer : getOpponent(initPlayer);

  const squares = history[step];

  function onMove(idx: number) {
    if (hasWon(squares)) return;
    if (squares[idx]) return;
    setHistory(
      produce(history, (draft) => {
        draft.push(
          produce(squares, (squareDraft) => {
            squareDraft[idx] = player;
          })
        );
      })
    );

    setStep((prev) => prev + 1);
  }

  function goToMove(idx: number) {
    setStep(idx);
    setHistory(
      produce((draft) => {
        draft.splice(idx + 1);
      })
    );
  }

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">React Tic Tac Toe</h1>
        <p className="text-sm text-gray-400">(yes, another one)</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2">
            {hasWon(squares)
              ? `Winner: ${hasWon(squares)}`
              : `Next player: ${player}`}
          </div>
          <Board squares={squares} onMove={onMove} />
        </div>
        <History history={history} onClick={goToMove} />
      </div>
    </>
  );
}
