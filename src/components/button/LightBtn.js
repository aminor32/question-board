const Button = ({ value = '', onClick = () => {}, onMouseDown = () => {}, 
  disabled = false,}) => {
  <button
    onClick={onClick}
    onMouseDown={onMouseDown}
    disabled={disabled}
    className='btn btn-light'
  >{value}</button>
};

export default Button;
