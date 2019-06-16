import React, { Component } from "react";
import { connect } from "react-redux";

class Travelers extends Component {
  render() {
    return (
      <>

        <h2 className={[['ui-title'],['-h2']].join(' ')}>Выберите пассажиров</h2>

        <div className={[['ui-input'],['-search']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по пассажирам"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={'ui-group'}>
          
          <div className={'ui-checked'}>
            <input type="checkbox" checked="checked"/>
            <label>
              Котельников Никита
            </label>
          </div>

        </div>

      </>
    );
  }
}

export default Travelers;
