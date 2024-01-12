import { useState } from 'react';
import Square from './Square';

const Board = () => {
   const [squares, setSquares] = useState(new Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true);

   const handleClick = (squarePosition) => {
      if (newSquare[squarePosition]) {
         return;
      }

      const newSquare = [...squares];

      if (xIsNext) {
         newSquare[squarePosition] = 'X';
      } else {
         newSquare[squarePosition] = 'O';
      }

      setSquares(newSquare);
      setXIsNext(!xIsNext);
   };

   return (
      <>
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
