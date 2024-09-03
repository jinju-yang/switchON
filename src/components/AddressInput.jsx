import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "./Modal"; // Import the Modal component
import "./AddressInput.css";
import SaveButton from "./SaveButton";

const AddressInput = () => {
  const [address, setAddress] = useState(""); // State to store the main address
  const [detailedAddress, setDetailedAddress] = useState(""); // State to store the detailed address
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility

  const handleComplete = (data) => {
    // Handle the address data after selection
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress); // Set the selected address
    setIsModalOpen(false); // Close the modal
  };

  const handleDetailedAddressChange = (event) => {
    setDetailedAddress(event.target.value); // Update the detailed address state as the user types
  };

  return (
    <div className="AddressInput">
      <button className="searchButton" onClick={() => setIsModalOpen(true)}>
        주소 검색
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DaumPostcode onComplete={handleComplete} />
      </Modal>
      <div className="address">
        <input
          type="text"
          placeholder="주소"
          value={address}
          readOnly
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
        <input
          type="text"
          placeholder="세부 주소"
          value={detailedAddress}
          onChange={handleDetailedAddressChange}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
      </div>
      <div className="button">
        <SaveButton />
      </div>
    </div>
  );
};

export default AddressInput;
