import React, { Component } from "react";
import "./contact.scss";

const url = {
  antonius: "https://drive.google.com/uc?id=1AdaghQbVp5AHRScx-CnRp2k2O4MaoaMX"
};

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <div className="content">
          <div className="content-layout">
            <img src={url.antonius} alt="antonius" />

            <div>
              <h3>Please Contact Our Sales Executive:</h3>

              <h4>+62 875 7917 7681 - Antonius</h4>
            </div>
          </div>

          <form method="POST" action="sendEmail">
            <label>Name</label>
            <input type="text" name="name" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
