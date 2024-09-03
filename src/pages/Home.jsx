// src/App.js
import Chat from "../components/Chat";
import Calendar from "../components/Calendar";
import Settings from "../components/Settings";
import LOGO from "../../public/Home-logo.svg";
import "./Home.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {
  return (
    <div className="Home">
      <ResponsiveAppBar />
      <img className="logo" src={LOGO} />
      <div className="app-container">
        <div className="chat-area">
          <Chat />
        </div>
        <div className="calendar-area">
          <Calendar />
        </div>
        <div className="settings-area">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Home;
