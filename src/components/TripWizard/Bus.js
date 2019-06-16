import React, { Component } from "react";
import { connect } from "react-redux";

class Bus extends Component {
  render() {
    return (
      <>

        <h2 className={[['ui-title'],['-h2']].join(' ')}>Выберите автобус из списка</h2>

        <div className={[['ui-input'],['-search']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по автобусам"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={'ui-group'}>
          
          <div className={'ui-radio'}>
            <input type="radio" name="vehicle"/>
            <label>
              Автобус
              <div className={'ui-number'}>
                <span>у183кн</span>
                <span>159</span>
              </div>
            </label>
          </div>
          
          <div className={'ui-radio'}>
            <input type="radio" name="vehicle"/>
            <label>
              Автобус
              <div className={'ui-number'}>
                <span>у183кн</span>
                <span>159</span>
              </div>
            </label>
          </div>
          
          <div className={'ui-radio'}>
            <input type="radio" name="vehicle"/>
            <label>
              Автобус
              <div className={'ui-number'}>
                <span>у183кн</span>
                <span>159</span>
              </div>
            </label>
          </div>

        </div>

      </>
    );
  }
}

export default Bus;
