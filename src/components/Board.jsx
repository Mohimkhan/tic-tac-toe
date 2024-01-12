import { useState } from 'react';
import Square from './Square';

const Board = () => {
   const [squares, setSquares] = useState(new Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(true);

   const winner = calculateWinner(squares);

   let status = '';

   if (winner) {
      status =  `Winner: ${winner}`
   } else {
      status = `Next Player: ${isXNext ? 'X' : 'O'}`;
   }

   const handleClick = (squarePosition) => {
      if (squares[squarePosition] || winner) {
         return;
      }

      const newSquare = [...squares];

      if (isXNext) {
         newSquare[squarePosition] = 'X';
      } else {
         newSquare[squarePosition] = 'O';
      }

      setSquares(newSquare);
      setIsXNext(!isXNext);
   };

   return (
      <>
      <div>
         <h1>{status}</h1>
      </div>
         <div className="flex items-center justify-center">
            <Square
               mark={squares[0]}
               onSquareClick={() => handleClick(0)}
            ></Square>
            <Square
               mark={squares[1]}
               onSquareClick={() => handleClick(1)}
            ></Square>
            <Square
               mark={squares[2]}
               onSquareClick={() => handleClick(2)}
            ></Square>
         </div>

         <div className="flex items-center justify-center">
            <Square
               mark={squares[3]}
               onSquareClick={() => handleClick(3)}
            ></Square>
            <Square
               mark={squares[4]}
               onSquareClick={() => handleClick(4)}
            ></Square>
            <Square
               mark={squares[5]}
               onSquareClick={() => handleClick(5)}
            ></Square>
         </div>

         <div className="flex items-center justify-center">
            <Square
               mark={squares[6]}
               onSquareClick={() => handleClick(6)}
            ></Square>
            <Square
               mark={squares[7]}
               onSquareClick={() => handleClick(7)}
            ></Square>
            <Square
               mark={squares[8]}
               onSquareClick={() => handleClick(8)}
            ></Square>
         </div>
      </>
   );
};

export default Board;


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }