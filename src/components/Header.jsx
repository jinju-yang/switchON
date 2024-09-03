import Button from "./Button";
import './Header.css';

const Header = ({ selectedButton }) => {
  return (
    <div className="Header">
      <Button text={"채팅방 💬"} isSelected={selectedButton === "chat"}/>
      <Button text={"관리자 화면 ⚙️"} isSelected={selectedButton === "setting"}/>
      <Button text={"캘린더 🗓️️"} isSelected={selectedButton === "calendar"}/>
    </div>
  )
}

export default Header;