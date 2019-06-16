import React, { Component } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={[["content"], ["-no-scroll"], ["-padding"]].join(" ")}>
          <Link className={"ui-add"} to="/admin/wizard">Новая поездка</Link>
        </div>
      </>
    );
  }
}

export default Home;
