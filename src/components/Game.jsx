import { useState } from 'react';
import Board from './Board';
import History from './History';

const Game = () => {
   const [history, setHistory] = useState([new Array(9).fill(null)]);
   const [isXNext, setIsXNext] = useState(true);
   const [currentMove, setCurrentMove] = useState(0);

   const currentSquares = history[currentMove];


   const jumpTo = (move) => {
      setCurrentMove(move);
      setIsXNext(move % 2 === 0);
   };

   const handlePlay = (nextSquares) => {
      setIsXNext(!isXNext);
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
   };

   const moves = history.map((square, move) => {
      let description = '';
      if (move > 0) {
         description = `Go to move #${move}`;
      } else {
         description = `Go start the Game`;
      }

      return (
         <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
            <button onClick={() => jumpTo(move)}>{description}</button>
         </li>
      );
   });


   return (
      <>
         <div className="flex justify-center p-4">
            <div className="mr-16">
               <Board
                  isXNext={isXNext}
                  squares={currentSquares}
                  onPlay={handlePlay}
               />
            </div>
            <History moves={moves}/>
         </div>
      </>
   );
};

export default Game;
