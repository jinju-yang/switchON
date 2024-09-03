import Input from "../components/Input";
import "./NoticeSetting.css";
import Header from "../components/Header";
import { TopLine } from "../components/TopLine";
import AddressInput from "../components/AddressInput";

const NoticeSetting = () => {
  return (
    <>
      <TopLine />
      <Header selectedButton={"setting"} />
      <div className="Input-container">
        <Input text={"주문 전 필독사항"} />
        <Input text={"취소/환불 규정"} />
        <div className="addressInput">
          <div className="title">매장 주소</div>
          <AddressInput />
        </div>
      </div>
    </>
  );
};

export default NoticeSetting;
