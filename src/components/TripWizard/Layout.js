import React, { Component } from "react";
import { connect } from "react-redux";
import Travelers from "./Travelers";
import Info from "./Info";
import Bus from "./Bus";
import WayPath from "./WayPath";

class Layout extends Component {
  render() {
    return (
      <>
        <Bus />
        {/* <Info /> */}
        {/* <WayPath /> */}
        {/* <Travelers /> */}
      </>
    );
  }
}

export default Layout;
