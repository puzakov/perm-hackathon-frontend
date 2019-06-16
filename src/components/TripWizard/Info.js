import React, { Component } from "react";
import { connect } from "react-redux";

class Info extends Component {
  render() {
    return (
      <>
        
        <h2 className={[['ui-title'],['-h2']].join(' ')}>Водитель</h2>

        <div className={[['ui-input'],['-search']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по водителям"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={'ui-group'}>
          
          <div className={'ui-radio'}>
            <input type="radio" name="driver" checked="checked"/>
            <label>
              111
            </label>
          </div>

        </div>
        
        <h2 className={[['ui-title'],['-h2']].join(' ')}>Сопровождающий</h2>

        <div className={[['ui-input'],['-search']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по водителям"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={'ui-group'}>
          
          <div className={'ui-radio'}>
            <input type="radio" name="attendant" checked="checked"/>
            <label>
              111
            </label>
          </div>

        </div>

      </>
    );
  }
}

export default Info;
