import React from "react";
import "./Header.css";
import { Tooltip } from "react-tooltip";
import AddNewDevice from "./AddNewDevice";
import useToggle from "./shared/useToggle";

export const Header = ({
  organisationName,
  listOfDevices,
  setListOfDevices,
}) => {
  const { status: togleDialogBox, toggleStatus: handleDialogboxTogle } =
    useToggle();

  return (
    <div className="header-wrapper">
      <div className="header-logo">Harvest Tech</div>
      <div>
        <span className="vessel-title" style={{ paddingRight: "1rem" }}>
          {organisationName}
        </span>

        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={"Add Device to " + organisationName}
          onClick={handleDialogboxTogle}
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
      </div>
      <AddNewDevice
        togleDialogBox={togleDialogBox}
        setTogleDialogBox={handleDialogboxTogle}
        listOfDevices={listOfDevices}
        setListOfDevices={setListOfDevices}
      />
    </div>
  );
};
