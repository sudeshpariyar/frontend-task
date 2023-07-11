import React from "react";
import "./DevicesList.css";
import SpeakerIcon from "@mui/icons-material/Speaker";
import TvIcon from "@mui/icons-material/Tv";

const DevicesList = ({ listOfDevices }) => {
  return (
    <div className="device-list-wrapper">
      <span className="component-title">List of Devices</span>
      {listOfDevices.length ? (
        <div className="device-list">
          {listOfDevices.map((device, index) => (
            <div className="individual-device" key={index}>
              <span className="device-name">{device.device}</span>
              <span className="device-type">
                {device.deviceType === "audio" ? (
                  <SpeakerIcon style={{ color: "red" }} />
                ) : (
                  //used from material Icon
                  <TvIcon style={{ color: "red" }} />
                  //used from material Icon
                )}
                {device.deviceType}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data">No device Found.</div>
      )}
    </div>
  );
};

export default DevicesList;
