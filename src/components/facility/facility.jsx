import React, { Component } from "react";
import "./facility.scss";

const url = {
  singaporeConcept:
    "https://drive.google.com/uc?id=1t1YxhlL_fzUSl1BqKYK65cKcPbZr0vnV",
  garden: "https://drive.google.com/uc?id=1yj_8r3vMoID3zMr3STby7ec6sazacHWe",
  pool: "https://drive.google.com/uc?id=1LUYuevSd3nvozSgIn4vbysyvcZW_8Y-t",
  pool2: "https://drive.google.com/uc?id=1fev3nzYqjAKVTFJbS_co4nxqWqiMKJe6",
  lounge: "https://drive.google.com/uc?id=1ORfku2xDFZEKDvFw9JNDLS_Kdp166UTN",
  vip: "https://drive.google.com/uc?id=1cC9FUKYD6KTfDNp2qBmx4ITPklGnCil9",
  gym: "https://drive.google.com/uc?id=1eGSsTH-s6FJvMa_mdqH_iwtXuNGruofH"
};

class Facility extends Component {
  state = {};
  render() {
    return (
      <div className="facility">
        <img
          src={url.singaporeConcept}
          className="content-img"
          alt="singaporeConcept"
        />

        <img src={url.garden} className="content-img" alt="garden" />

        <img src={url.pool} className="content-img" alt="pool" />

        <img src={url.pool2} className="content-img" alt="pool-2" />

        <img src={url.gym} className="content-img" alt="vip" />

        <img src={url.lounge} className="content-img" alt="lounge" />

        <img src={url.vip} className="content-img" alt="vip" />
      </div>
    );
  }
}

export default Facility;
