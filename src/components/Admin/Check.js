import React, { Component } from "react";
import Header from "../Header";

class Check extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={[["content"], ["-no-scroll"], ["-padding"]].join(" ")}>
          <h1>Admin/Check</h1>
        </div>
      </>
    );
  }
}

export default Check;
