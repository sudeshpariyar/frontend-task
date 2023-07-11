import React from "react";
import "./Room.css";
import { Tooltip } from "react-tooltip";
const Room = ({ roomName, vessel }) => {
  return (
    <div>
      <div className="room-wrapper">
        <span className="room-name">{roomName}</span>
        <span className="vessel-name">{vessel}</span>
        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Assign Device to " + roomName}
          // onClick={() => {
          //   setTogleDialogBox(!togleDialogBox);
          // }}
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
      </div>
    </div>
  );
};

export default Room;
