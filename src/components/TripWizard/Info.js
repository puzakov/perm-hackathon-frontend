import React, { Component } from "react";
import { connect } from "react-redux";
import { setTripDriver, setTripTeacher } from "../../modules/Admin";

class Info extends Component {
  state = {
    searchDriver: "",
    searchAttendant: ""
  };

  handleSearchChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      driversList,
      teachersList,
      setTripDriver,
      setTripTeacher
    } = this.props;
    const { searchDriver, searchAttendant } = this.state;
    return (
      <>
        <h2 className={[["ui-title"], ["-h2"]].join(" ")}>Водитель</h2>

        <div className={[["ui-input"], ["-search"]].join(" ")}>
          <input
            type="text"
            className={"ui-input__field"}
            placeholder="Поиск по водителям"
            value={searchDriver}
            onChange={this.handleSearchChange}
            name="searchDriver"
          />
          <span className={"ui-input__line"} />
        </div>

        <div className={"ui-group"}>
          {driversList.map((name, index) => {
            if (
              searchDriver.length &&
              name.toLowerCase().indexOf(searchDriver.toLowerCase()) === -1
            )
              return null;

            return (
              <div className={"ui-radio"} key={index}>
                <input
                  type="radio"
                  name="driver"
                  value={name}
                  onClick={() => {
                    setTripDriver(name);
                  }}
                />
                <label>{name}</label>
              </div>
            );
          })}
        </div>

        <h2 className={[["ui-title"], ["-h2"]].join(" ")}>Сопровождающий</h2>

        <div className={[["ui-input"], ["-search"]].join(" ")}>
          <input
            type="text"
            className={"ui-input__field"}
            placeholder="Поиск по сопровождающим"
            value={searchAttendant}
            onChange={this.handleSearchChange}
            name="searchAttendant"
          />
          <span className={"ui-input__line"} />
        </div>

        <div className={"ui-group"}>
          {teachersList.map((name, index) => {
            if (
              searchAttendant.length &&
              name.toLowerCase().indexOf(searchAttendant.toLowerCase()) === -1
            )
              return null;

            return (
              <div className={"ui-radio"} key={index}>
                <input
                  type="radio"
                  name="attendant"
                  value={name}
                  onClick={() => {
                    setTripTeacher(name);
                  }}
                />
                <label>{name}</label>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    driversList: state.admin.driversList,
    teachersList: state.admin.teachersList
  }),
  { setTripDriver, setTripTeacher }
)(Info);
