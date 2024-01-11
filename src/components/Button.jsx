const Button = ({ btnType = 'button', children, ...rest }) => {
   return (
      <button type={btnType} {...rest}>
         {children}
      </button>
   );
};

export default Button;
