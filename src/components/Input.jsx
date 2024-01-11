const Input = ({ inputType = 'text', children, ...rest }) => {
   return (
      <input type={inputType} {...rest}>
         {children}
      </input>
   );
};

export default Input;
