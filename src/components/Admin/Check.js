import React, { Component } from "react";
import Header from "../Header";
import styles from "./Admin.module.css";

class Check extends Component {
  render() {
    return (
      <>

        <Header />

        <div className={[["content"], ["-padding"]].join(" ")}>
          
          <h2 className={[['ui-title'],['-h2']].join(' ')}>Чек-лист пассажиров</h2>

          <div className={[['ui-input'],['-search']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Поиск по пассажирам"
            />
            <span className={"ui-input__line"} />
          </div>

          <div className={'ui-group'}>
            
            <div className={'ui-checkbox'}>
              <input type="checkbox"/>
              <label>
                Котельников Никита
              </label>
            </div>
            
            <div className={'ui-checkbox'}>
              <input type="checkbox"/>
              <label>
                Котельников Никита
              </label>
            </div>
            
            <div className={'ui-checkbox'}>
              <input type="checkbox"/>
              <label>
                Котельников Никита
              </label>
            </div>

          </div>

          <div className={styles['admin-bottom-spacer']}></div>

          <div className={styles['admin-bottom-button']}>
            <button className={[['ui-button'],['-all-width']].join(' ')}>В путь</button>
          </div>

        </div>

      </>
    );
  }
}

export default Check;
