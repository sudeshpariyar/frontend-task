import React, { useState } from "react";
import "./DevicesList.css";
import SpeakerIcon from "@mui/icons-material/Speaker";
import TvIcon from "@mui/icons-material/Tv";
import { Tooltip } from "react-tooltip";
import AddNewDevice from "./AddNewDevice";

const DevicesList = ({ listOfDevices, setListOfDevices }) => {
  const [togleDialogBox, setTogleDialogBox] = useState(false);

  return (
    <div className="device-list-wrapper">
      <div className="device-list-header">
        <span className="component-title">List of Devices</span>
        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Add Device "}
          onClick={() => {
            setTogleDialogBox(!togleDialogBox);
          }}
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
        <AddNewDevice
          togleDialogBox={togleDialogBox}
          setTogleDialogBox={setTogleDialogBox}
          listOfDevices={listOfDevices}
          setListOfDevices={setListOfDevices}
        />
      </div>
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
