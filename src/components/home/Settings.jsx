// src/components/Settings.js
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-title">⚙️ 설정</h2>
      <div className="settings-grid">
        <button className="settings-button">
          주문서
          <br /> 설정
        </button>
        <button className="settings-button">
          공지사항
          <br /> 설정
        </button>
        <button className="settings-button">
          영업 시간 <br />
          설정
        </button>
        <button className="settings-button">
          채팅
          <br /> 간편 기능
        </button>
      </div>
    </div>
  );
};

export default Settings;
