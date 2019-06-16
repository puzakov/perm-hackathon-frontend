import React, { Component } from "react";
import { connect } from "react-redux";
import Travelers from "./Travelers";
import Info from "./Info";
import Bus from "./Bus";
import WayPath from "./WayPath";
import Header from "../Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={[["content"], ["-padding"]].join(" ")}>
          <div className={"ui-tabs"}>
            <div className={[["ui-tabs__item"], ["-active"]].join(" ")}>
              Автобус
            </div>
            <div className={"ui-tabs__item"}>Маршрут</div>
            <div className={"ui-tabs__item"}>Информация</div>
            <div className={"ui-tabs__item"}>Список</div>
          </div>

          {/* <Bus /> */}
          {/* <Info /> */}
          {/* <WayPath /> */}
          <Travelers />
        </div>
      </>
    );
  }
}

export default Layout;
