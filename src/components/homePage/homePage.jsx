import React, { Component } from "react";
import "./homePage.scss";

const url = {
  SkyHouseImage:
    "https://drive.google.com/uc?id=1c43xJxxD6p26_MuJ826NjRZWnEfYNl5i",
  locationImage:
    "https://drive.google.com/uc?id=1s7NwrrIvIYgZON-U4KuAgLvSfemZfvGA"
};

class homePage extends Component {
  render() {
    return (
      <div className="home-page">
        <img
          src={url.SkyHouseImage}
          className="content-img"
          alt="SkyHouseImage"
        />

        <img
          src={url.locationImage}
          className="content-img"
          alt="locationImage"
        />
      </div>
    );
  }
}

export default homePage;
