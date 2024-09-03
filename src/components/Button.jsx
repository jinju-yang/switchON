import './Button.css';

const Button = ({ text, isSelected }) => {
  return (
    <div className="Button" style={{backgroundColor: isSelected ? 'rgba(149, 26, 190, 0.14)' : 'white'}}>
      {text}
    </div>
  )
}

export default Button;

