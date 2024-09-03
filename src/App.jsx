import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatFunction from "./pages/ChatFunction";
import NoticeSetting from "./pages/NoticeSetting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/setting/chat" element={<ChatFunction />} />
        <Route path="/setting/notice" element={<NoticeSetting />} />
      </Routes>
    </>
  );
}

export default App;
