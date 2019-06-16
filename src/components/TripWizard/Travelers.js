import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../Admin/Admin.module.css";

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
          <button className={[['ui-button'],['-all-width']].join(' ')}>Перейти к чеклисту</button>
        </div>

      </>
    );
  }
}

export default Travelers;
