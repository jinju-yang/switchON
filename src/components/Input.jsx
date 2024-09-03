import SaveButton from "./SaveButton";
import "./Input.css";

const Input = ({ text }) => {
  return (
    <div className="Input">
      {text ? (
        <div className="title">{text}</div> // Render text prop as a title
      ) : (
        <input className="title" defaultValue={"새 텍스트 대치"} /> // Render input field if no text prop is provided
      )}
      <textarea placeholder="응답 메시지"></textarea>
      <SaveButton />
    </div>
  );
};

export default Input;
