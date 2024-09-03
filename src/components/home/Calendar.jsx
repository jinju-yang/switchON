// src/components/Calendar.js
import "./Calendar.css";
import { TopLine } from "../TopLine";

const Calendar = () => {
  const orders = [
    { time: "14:00", name: "양지원", menu: "초코 미니" },
    { time: "16:00", name: "김진솔", menu: "초코 미니" },
    { time: "17:00", name: "양진주", menu: "초코 미니" },
    { time: "19:00", name: "홍길동", menu: "초코 미니" },
  ];

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">🗓️ 캘린더</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>시간</th>
            <th>주문자명</th>
            <th>메뉴명</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.time}</td>
              <td>{order.name}</td>
              <td>{order.menu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
