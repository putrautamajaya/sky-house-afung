import React, { Component } from "react";
import "./nearbyFacility.scss";

const url = {
  medicalService:
    "https://drive.google.com/uc?id=11dTCuQ9YhzskmXwSYn__qPycv_w8MPgn",
  digitalHub:
    "https://drive.google.com/uc?id=1q5R9QP35OSnXO4OcN4E02kgJD_W_SUWo",
  educationService:
    "https://drive.google.com/uc?id=1w-IgWnEKfXLys5zPEhTOSmX8ZW5fp7Hh",
  locatedInCBD:
    "https://drive.google.com/uc?id=1s9wXU9V76EV74BqzvgQD6HB2UA0sCLSe",
  smartCity: "https://drive.google.com/uc?id=1AWDnELZbXVMRN3-H1u9mCcKgBEaySrR8"
};

class NearbyFacility extends Component {
  state = {};
  render() {
    return (
      <div className="nearby-Facility">
        <img
          src={url.medicalService}
          className="content-img"
          alt="medicalService"
        />

        <img src={url.digitalHub} className="content-img" alt="digitalHub" />

        <img
          src={url.educationService}
          className="content-img"
          alt="educationService"
        />

        <img
          src={url.locatedInCBD}
          className="content-img"
          alt="locatedInCBD"
        />

        <img src={url.smartCity} className="content-img" alt="smartCity" />
      </div>
    );
  }
}

export default NearbyFacility;
