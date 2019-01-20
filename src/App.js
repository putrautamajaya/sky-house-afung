import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import NavigationBar from "./components/navigationBar/navigationBar";
import HomePage from "./components/homePage/homePage";
import Facility from "./components/facility/facility";
import RoomOption from "./components/roomOption/roomOption";
import NearbyFacility from "./components/nearbyFacility/nearbyFacility";
import Contact from "./components/contact/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavigationBar className="navigationBar" />
          <Route path="/" component={HomePage} exact />
          <Route path="/facility" component={Facility} />
          <Route path="/roomOption" component={RoomOption} />
          <Route path="/nearbyFacility" component={NearbyFacility} />
          <Route path="/contact" component={Contact} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
