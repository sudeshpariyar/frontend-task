import React from "react";
import "./Room.css";
const Room = ({ roomName, vessel }) => {
  return (
    <div>
      <div className="room-wrapper">
        <span className="room-name">{roomName}</span>
        <br />
        <span className="vessel-name">{vessel}</span>
      </div>
    </div>
  );
};

export default Room;
