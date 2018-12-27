import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigationBar.scss";

import { DropdownButton, MenuItem } from "react-bootstrap";

const logo = "https://drive.google.com/uc?id=1NLts4rmrVAPCYZ4wht9hq7JenOPBQ1mk";

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar-container">
        <img className="logo" src={logo} alt="Logo" />

        <div className="navigation-menu display-none">
          <Link to="/">HOME</Link>
          <Link to="/facility">FACILITY</Link>
          <Link to="/roomOption">ROOM OPTION</Link>
          <Link to="/nearbyFacility">NEARBY FACILITY</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <DropdownButton
          id="1"
          bsStyle="default"
          title="More About SkyHouse"
          className="dropdown dropdown-none"
        >
          <MenuItem eventKey="1">
            <Link to="/">HOME</Link>
          </MenuItem>

          <MenuItem eventKey="2">
            <Link to="/facility">FACILITY</Link>
          </MenuItem>

          <MenuItem eventKey="3">
            <Link to="/roomOption">ROOM OPTION</Link>
          </MenuItem>

          <MenuItem eventKey="4">
            <Link to="/nearbyFacility">NEARBY FACILITY</Link>
          </MenuItem>

          <MenuItem eventKey="5">
            <Link to="/contact">CONTACT</Link>
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default NavigationBar;
