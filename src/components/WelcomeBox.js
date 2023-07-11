import React, { useState } from "react";
import "./WelcomeBox.css";
import Room from "./Room";

const WelcomeBox = ({ vesselName }) => {
  const [listOfRooms, setListOfRooms] = useState(["Room1", "Room2", "Room3"]);
  const [roomName, setRoomName] = useState("");
  const [createRoomFlag, setCreateRoomFlag] = useState(true);

  const addRoomToList = (e) => {
    e.preventDefault();
    if (roomName) {
      setListOfRooms([...listOfRooms, roomName]);
      setRoomName("");
    }
  };

  return (
    <div className="welcome-box-wrapper">
      <div className="welcome-box">
        <span>Welcome to </span>
        <span className="vessel-title">{vesselName}</span>.
        <br />
        <button
          onClick={() => setCreateRoomFlag(!createRoomFlag)}
          className="create-room-button"
        >
          Create room
        </button>
        {createRoomFlag && (
          <div className="create-room-box">
            <form onSubmit={addRoomToList}>
              <input
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      {listOfRooms.length ? (
        <div className="rooms">
          {listOfRooms.map((room, index) => (
            <Room roomName={room} key={index} vessel={vesselName} />
          ))}
        </div>
      ) : (
        <span>There are no associated rooms.</span>
      )}
    </div>
  );
};

export default WelcomeBox;
