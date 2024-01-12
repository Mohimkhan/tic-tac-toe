import Button from './Button';

const Square = ({mark, onSquareClick = ()=>{}}) => {
   return <Button onClick={onSquareClick}>{mark}</Button>;
};

export default Square;
