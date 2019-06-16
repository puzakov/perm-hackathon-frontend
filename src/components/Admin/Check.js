import React, { Component } from "react";
import Header from "../Header";
import styles from "./Admin.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Check extends Component {
  state = { search: "" };

  handleListChange = () => {};

  render() {
    const { childrenList } = this.props;

    return (
      <>
        <Header />

        <div className={[["content"], ["-padding"]].join(" ")}>
          <h2 className={[["ui-title"], ["-h2"]].join(" ")}>
            Чек-лист пассажиров
          </h2>

          <div className={[["ui-input"], ["-search"]].join(" ")}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по пассажирам"
              onChange={e => {
                this.setState({ search: e.target.value });
              }}
            />
            <span className={"ui-input__line"} />
          </div>

          <div className={"ui-group"}>
            {childrenList.map((name, index) => {
              const { search } = this.state;
              if (
                search.length &&
                name.toLowerCase().indexOf(search.toLowerCase()) === -1
              )
                return null;

              return (
                <div className={"ui-checkbox"} key={index}>
                  <input
                    type="checkbox"
                    value={index}
                    onChange={this.handleListChange}
                  />
                  <label>{name}</label>
                </div>
              );
            })}
          </div>

          <div className={styles["admin-bottom-spacer"]} />

          <div className={styles["admin-bottom-button"]}>
            <Link className={"ui-button -all-width"} to="/admin/map">
              В путь
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default connect(state => ({
  childrenList: state.admin.childrenList
}))(Check);
