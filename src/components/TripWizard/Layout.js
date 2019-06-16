import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Travelers from "./Travelers";
import Info from "./Info";
import Bus from "./Bus";
import WayPath from "./WayPath";
import Header from "../Header";
import classNames from "classnames";

class Layout extends Component {
  state = {
    isDone: false,
    current: 1
  };

  handleWizardDone = () => {
    this.setState({ redirect: true });
  };

  handleDone = () => {
    this.setState({ isDone: true });
  };

  handleSwitch = item => {
    this.setState({ current: item });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Header />
        <div className={[["content"], ["-padding"]].join(" ")}>
          <div className={"ui-tabs"}>
            <div
              className={classNames({
                ["ui-tabs__item"]: true,
                ["-active"]: current === 1
              })}
              onClick={() => {
                this.handleSwitch(1);
              }}
            >
              Автобус
            </div>
            <div
              className={classNames({
                ["ui-tabs__item"]: true,
                ["-active"]: current === 2
              })}
              onClick={() => {
                this.handleSwitch(2);
              }}
            >
              Маршрут
            </div>
            <div
              className={classNames({
                ["ui-tabs__item"]: true,
                ["-active"]: current === 3
              })}
              onClick={() => {
                this.handleSwitch(3);
              }}
            >
              Информация
            </div>
            <div
              className={classNames({
                ["ui-tabs__item"]: true,
                ["-active"]: current === 4
              })}
              onClick={() => {
                this.handleSwitch(4);
              }}
            >
              Список
            </div>
          </div>

          {current === 1 && <Bus />}
          {current === 2 && <WayPath />}
          {current === 3 && <Info />}
          {current === 4 && <Travelers onDone={this.handleDone}/>}
        </div>
        {this.state.isDone && <Redirect to="/admin/check" />}
      </>
    );
  }
}

export default Layout;
