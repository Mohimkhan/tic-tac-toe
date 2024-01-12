function History({moves = []}) {
   return (
      <div>
         <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>
      </div>
   );
}

export default History;
