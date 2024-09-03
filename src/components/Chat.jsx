// src/components/Chat.js
import "./Chat.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Chat = () => {
  const messages = [
    {
      name: "양지원",
      date: "9월 6일",
      reserve_time: "12시",
      menu: "초코 미니",
      time: "9:50",
      text: "넵! 잘 부탁드려요!",
    },
    {
      name: "양지원",
      date: "9월 6일",
      reserve_time: "1시",
      menu: "바닐라 미니",
      time: "9:52",
      text: "케이크 주문하고 싶어요~",
    },
    {
      name: "양지원",
      date: "9월 6일",
      reserve_time: "9시",
      menu: "카네이션 5호",
      time: "9:56",
      text: "이 그림으로 레터링을 하고 싶어요",
    },
    {
      name: "양지원",
      date: "9월 6일",
      reserve_time: "6시",
      menu: "초코 미니",
      time: "9:50",
      text: "케이크에 옵션 추가 가능할까요??",
    },
    {
      name: "양지원",
      menu: "초코 미니",
      date: "9월 6일",
      reserve_time: "4시",
      time: "9:52",
      text: "케이크 주문하고 싶어요~",
    },
  ];

  return (
    <div className="chat-container">
      <h2 className="chat-title">💬 채팅방</h2>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-inner">
              <PermIdentityIcon />
              <div className="message-detail">
                <span className="message-name">
                  {message.name} {message.date} {message.reserve_time}{" "}
                  {message.menu}
                </span>
                <p className="message-text">
                  <br /> {message.text}
                </p>
              </div>
            </div>
            <span className="message-time">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
