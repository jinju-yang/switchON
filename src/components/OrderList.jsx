import './OrderList.css';
import PickUpGray from '../../../public/PickUpGray.svg'
import PickUpGreen from '../../../public/PickUpGreen.svg'

const OrderList = ({ date, orders }) => {
  return (
    <div className="order-list-container">
      <div className="order-list-header">
        <span>{date}</span>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>시간</th>
            <th>주문자명</th>
            <th>메뉴명</th>
            <th>픽업</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.time}</td>
              <td>{order.name}</td>
              <td>
                {order.menu} 
              </td>
              <td>
              {order.pickedUp ? <img src={PickUpGreen}/> : <img src={PickUpGray}/>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
