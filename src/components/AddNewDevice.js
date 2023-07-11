import { Dialog } from "@mui/material";
import { useState } from "react";
import "./AddNewDevice.css";

const options = [
  {
    value: "audio",
    label: "Audio",
  },
  {
    value: "video",
    label: "Video",
  },
];

const AddNewDevice = ({
  togleDialogBox,
  setTogleDialogBox,
  listOfDevices,
  setListOfDevices,
}) => {
  const [device, setDevice] = useState("");
  const [deviceType, setDeviceType] = useState("audio");

  const handleClose = () => {
    setTogleDialogBox(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (device && deviceType) {
      console.log(device, deviceType);
      setListOfDevices([...listOfDevices, { device, deviceType }]);
      setDevice("");
      setTogleDialogBox(false);
    }
  };
  return (
    <>
      <Dialog open={togleDialogBox} onClose={handleClose}>
        <form className="add-device-form" onSubmit={handleSubmit}>
          <span className="form-title">Add Device</span>

          <input
            placeholder="Device Name"
            type="text"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          />
          <select onChange={(e) => setDeviceType(e.target.value)}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="action-buttons">
            <button className="cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button className="primary-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddNewDevice;
