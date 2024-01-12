const Button = ({ btnType = 'button', children = 'X', ...rest }) => {
   return (
      <button type={btnType} className="size-16 border border-gray-400 m-1 font-bold text-3xl" {...rest}>
         {children}
      </button>
   );
};

export default Button;
