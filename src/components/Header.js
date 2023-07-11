import React, { useState } from "react";
import "./Header.css";
import { Tooltip } from "react-tooltip";
import AddNewDevice from "./AddNewDevice";

export const Header = ({
  organisationName,
  listOfDevices,
  setListOfDevices,
}) => {
  const [togleDialogBox, setTogleDialogBox] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header-logo">Harvest Tech</div>
      <div>
        <span className="vessel-title">{organisationName}</span>

        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Add Device to " + organisationName}
          onClick={() => {
            setTogleDialogBox(!togleDialogBox);
          }}
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
      </div>
      <AddNewDevice
        togleDialogBox={togleDialogBox}
        setTogleDialogBox={setTogleDialogBox}
        listOfDevices={listOfDevices}
        setListOfDevices={setListOfDevices}
      />
    </div>
  );
};
