import { TopLine } from "../components/TopLine";
import Header from "../components/Header";
import Input from "../components/Input";
import "./ChatFunction.css";
import { useState } from "react";

const ChatFunction = () => {
  const [inputs, setInputs] = useState([<Input key={0} />, <Input key={1} />]);

  const addInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      <Input key={prevInputs.length} />,
    ]);
  };
  return (
    <div>
      <TopLine />
      <Header selectedButton={"setting"} />
      <div className="Input-container">
        <div className="Inputs">{inputs}</div>
        <div className="plus-button-container">
          <button className="plus-button" onClick={addInput}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFunction;
