import React, { Component } from "react";
import { connect } from "react-redux";
import { setTripList } from "../../modules/Admin";
import styles from "../Admin/Admin.module.css";

class Travelers extends Component {
  state = { search: "" };

  handleListChange = () => {
    const { childrenList, setTripList, tripList } = this.props;
    // setTripList(list);
  };

  render() {
    const { childrenList } = this.props;
    return (
      <>
        <h2 className={[["ui-title"], ["-h2"]].join(" ")}>
          Выберите пассажиров
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
          <button
            onClick={this.props.onDone}
            className={[["ui-button"], ["-all-width"]].join(" ")}
          >
            Перейти к чеклисту
          </button>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    childrenList: state.admin.childrenList,
    tripList: state.admin.trip.list
  }),
  { setTripList }
)(Travelers);
