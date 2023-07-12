import { Dialog } from "@mui/material";
import React, { useState } from "react";

const AssignDeviceToRoom = ({
  assignDialogbox,
  setAssignDialogbox,
  listOfDevices,
  listOfAssignedDevices,
  setListOfAssignedDevices,
}) => {
  const [assignedDevice, setAssignedDevice] = useState("");

  const handleClose = () => {
    setAssignDialogbox(false);
  };
  const handleSubmit = (e) => {
    console.log(assignedDevice);
    e.preventDefault();
    if (assignedDevice) {
      setListOfAssignedDevices([...listOfAssignedDevices, assignedDevice]);
      setAssignedDevice("");
    }
    handleClose();
  };

  return (
    <>
      <Dialog open={assignDialogbox} onClose={handleClose}>
        <form className="add-device-form" onSubmit={handleSubmit}>
          <span className="form-title">Assign Device</span>

          <select onChange={(e) => setAssignedDevice(e.target.value)}>
            <option value=""></option>
            {listOfDevices.map((option, index) => (
              <option key={index} value={option.device}>
                {option.device}
              </option>
            ))}
          </select>

          <div className="action-buttons">
            <button className="cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button className="primary-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AssignDeviceToRoom;
