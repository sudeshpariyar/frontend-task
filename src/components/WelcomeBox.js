import React, { useState } from "react";
import "./WelcomeBox.css";
import Room from "./Room";
import useToggle from "./shared/useToggle";

const WelcomeBox = ({ vesselName, listOfDevices }) => {
  const [listOfRooms, setListOfRooms] = useState(["TestRoom"]);
  const [roomName, setRoomName] = useState("");
  const { status: createRoomFlag, toggleStatus: changeRoomFlag } = useToggle();
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
        <div className="create-room-wrapper">
          <button onClick={changeRoomFlag} className="create-room-button">
            Create room
          </button>
          {createRoomFlag && (
            <div className="create-room-box">
              <form onSubmit={addRoomToList}>
                <div className="form-wrapper">
                  <input
                    placeholder="Room Name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                  />
                  <div>
                    <button className="cancel-button" onClick={changeRoomFlag}>
                      Cancel
                    </button>
                    <button className="primary-button" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div>
        {listOfRooms.length ? (
          <div className="rooms">
            {listOfRooms.map((room, index) => (
              <Room
                roomName={room}
                key={index}
                vessel={vesselName}
                listOfDevices={listOfDevices}
              />
            ))}
          </div>
        ) : (
          <span className="no-data-wrapper">
            <span className="no-data">There are no associated rooms.</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default WelcomeBox;
