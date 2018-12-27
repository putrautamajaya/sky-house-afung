import React, { Component } from "react";
import "./roomOption.scss";

const url = {
  studio: "https://drive.google.com/uc?id=1ISY_qiWrY29ctAFCDIJKvZDCdV0-SvBc",
  twoBedroom:
    "https://drive.google.com/uc?id=1wgec666ycCK_GlJB-JjuMkOR8DwxNQqM",
  threeBedroom:
    "https://drive.google.com/uc?id=17sZN-1UlZLybYp82FdH7OeFm1pHHbS4x",
  threePlusOne85:
    "https://drive.google.com/uc?id=1at00sq3G9XMJHe0ejycQh6ItxKQOykQI",
  threePlusOne120:
    "https://drive.google.com/uc?id=16b0CylW5gw5Vq1gX2q3QRO-lrKN4ZGjL"
};

class RoomOption extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img src={url.studio} className="content-img" alt="studio" />

        <img src={url.twoBedroom} className="content-img" alt="twoBedroom" />

        <img
          src={url.threeBedroom}
          className="content-img"
          alt="threeBedroom"
        />

        <img
          src={url.threePlusOne85}
          className="content-img"
          alt="twoBedroom"
        />

        <img
          src={url.threePlusOne120}
          className="content-img"
          alt="twoBedroom"
        />
      </div>
    );
  }
}

export default RoomOption;
