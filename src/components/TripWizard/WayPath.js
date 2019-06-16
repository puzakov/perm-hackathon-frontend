import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Admin.module.css";
import classNames from "classnames";
import { setTripWayPath } from "../../modules/Admin";

class WayPath extends Component {
  handleChange = e => {
    const { setTripWayPath, wayPath } = this.props;
    setTripWayPath({ ...wayPath, [e.target.name]: e.target.value });
  };

  render() {
    const { wayPath } = this.props;
    return (
      <>
        <h2 className={[["ui-title"], ["-h2"]].join(" ")}>
          Укажите маршрут движения
        </h2>

        <div className={[["ui-input"], ["-search"], ["-a"]].join(" ")}>
          <input
            type="text"
            className={"ui-input__field"}
            placeholder="Адрес точки отъезда"
            value={wayPath.dep}
            name="dep"
            onChange={this.handleChange}
          />
          <span className={"ui-input__line"} />
        </div>

        <div className={[["ui-input"], ["-search"], ["-b"]].join(" ")}>
          <input
            type="text"
            className={"ui-input__field"}
            placeholder="Адрес точки прибытия"
            value={wayPath.arr}
            onChange={this.handleChange}
            name="arr"
          />
          <span className={"ui-input__line"} />
        </div>

        <div
          className={classNames({
            [styles["admin-map"]]: true,
            [styles["-way"]]: wayPath.arr.length>0 && wayPath.dep.length>0
          })}
        />
      </>
    );
  }
}

export default connect(
  state => ({ wayPath: state.admin.trip.wayPath }),
  { setTripWayPath }
)(WayPath);
