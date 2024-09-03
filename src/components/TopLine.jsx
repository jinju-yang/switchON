import "./TopLine.css";

export const TopLine = ({ logo }) => {
  return (
    <div className="TopLine">{logo && <img className="logo" src={logo} />}</div>
  );
};
