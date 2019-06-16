import React, { Component } from "react";
import { connect } from "react-redux";
import { setTripBus } from "../../modules/Admin/actions";

const BusRadio = ({ id, name, num, onChange }) => {
  return (
    <div className={"ui-radio"}>
      <input type="radio" name={"vehicle"} value={id} onChange={onChange} />
      <label>
        {name}
        <div className={"ui-number"}>
          <span>{num}</span>
          <span>159</span>
        </div>
      </label>
    </div>
  );
};

class Bus extends Component {
  state = { search: "" };

  handleBusChange = e => {
    const { busesList, setTripBus } = this.props;
    const bus = busesList.find(item => item.id == e.target.value);
    setTripBus(bus);
  };

  render() {
    const { busesList } = this.props;

    return (
      <>
        <h2 className={[["ui-title"], ["-h2"]].join(" ")}>
          Выберите автобус из списка
        </h2>

        <div className={[["ui-input"], ["-search"]].join(" ")}>
          <input
            type="text"
            className={"ui-input__field"}
            placeholder="Поиск по автобусам"
            value={this.state.search}
            onChange={e => {
              this.setState({ search: e.target.value });
            }}
          />
          <span className={"ui-input__line"} />
        </div>

        <div className={"ui-group"}>
          {busesList.map(item => {
            if (item.name.length && item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1)
              return null;

            return (
              <BusRadio
                {...item}
                onChange={this.handleBusChange}
                key={item.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default connect(
  state => ({ busesList: state.admin.busesList }),
  { setTripBus }
)(Bus);
