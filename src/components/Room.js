import React, { useState } from "react";
import "./Room.css";
import { Tooltip } from "react-tooltip";
import AssignDeviceToRoom from "./AssignDeviceToRoom";

const Room = ({ roomName, vessel, listOfDevices }) => {
  const [assignDialogbox, setAssignDialogbox] = useState(false);
  const [listOfAssignedDevices, setListOfAssignedDevices] = useState([]);

  return (
    <div>
      <div className="room-wrapper">
        <span className="room-name">{roomName}</span>
        <span className="vessel-name">{vessel}</span>
        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Assign Device to " + roomName}
          onClick={() => {
            setAssignDialogbox(!assignDialogbox);
          }}
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
        <span
          className="devices-title"
          data-tooltip-id="assigned-devices"
          data-tooltip-content={
            listOfAssignedDevices.length
              ? listOfAssignedDevices
              : "No devices Assigned"
          }
        >
          Devices
          <Tooltip id="assigned-devices" />
        </span>
      </div>
      <AssignDeviceToRoom
        assignDialogbox={assignDialogbox}
        setAssignDialogbox={setAssignDialogbox}
        listOfDevices={listOfDevices}
        listOfAssignedDevices={listOfAssignedDevices}
        setListOfAssignedDevices={setListOfAssignedDevices}
      />
    </div>
  );
};

export default Room;
