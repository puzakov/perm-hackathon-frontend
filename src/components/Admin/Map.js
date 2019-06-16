import React, { Component } from "react";
import Header from "../Header";

class Map extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={[["content"], ["-no-scroll"], ["-padding"]].join(" ")}>
          <h1>Admin/Map</h1>
        </div>
      </>
    );
  }
}

export default Map;
