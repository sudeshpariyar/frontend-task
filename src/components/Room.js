import React, { useState } from "react";
import "./Room.css";
import { Tooltip } from "react-tooltip";
import AssignDeviceToRoom from "./AssignDeviceToRoom";
import useToggle from "./shared/useToggle";

const Room = ({ roomName, vessel, listOfDevices }) => {
  const [listOfAssignedDevices, setListOfAssignedDevices] = useState([]);
  const { status: assignDialogbox, toggleStatus: handleDialogboxTogle } =
    useToggle();
  return (
    <div>
      <div className="room-wrapper">
        <span className="room-name">{roomName}</span>
        <span className="vessel-name">{vessel}</span>
        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Assign Device to " + roomName}
          onClick={handleDialogboxTogle}
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
        setAssignDialogbox={handleDialogboxTogle}
        listOfDevices={listOfDevices}
        listOfAssignedDevices={listOfAssignedDevices}
        setListOfAssignedDevices={setListOfAssignedDevices}
      />
    </div>
  );
};

export default Room;
