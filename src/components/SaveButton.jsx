import "./SaveButton.css";

const SaveButton = ({ alertMessage }) => {
  const onClick = () => {
    alert(alertMessage);
  };

  return (
    <button onClick={onClick} className="SaveButton">
      저장하기
    </button>
  );
};

export default SaveButton;
