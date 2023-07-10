import React from "react";
import "./Header.css";
import { Tooltip } from "react-tooltip";

export const Header = ({ organisationName }) => {
  return (
    <div className="header-wrapper">
      <div className="header-logo">Harvest Tech</div>
      <div className="organisation-name">
        {organisationName}

        <button
          className="add-devices"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Add Devices to organisation"
        >
          +
          <Tooltip id="my-tooltip" />
        </button>
      </div>
    </div>
  );
};
