import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Admin.module.css";

class WayPath extends Component {
  render() {
    return (
      <>
        
        <h2 className={[['ui-title'],['-h2']].join(' ')}>Укажите маршрут движения</h2>

        <div className={[['ui-input'],['-search'],['-a']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Адрес точки отъезда"
              value="Город Пермь, ул. Ленина, д. 10"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={[['ui-input'],['-search'],['-b']].join(' ')}>
            <input
              type="text"
              className={"ui-input__field"}
              placeholder="Адрес точки прибытия"
              value="Оханский район, ул. Лес, д. 2, лагерь «Заря»"
            />
            <span className={"ui-input__line"} />
        </div>

        <div className={[[styles['admin-map']],[styles['-way']]].join(' ')}></div>
        
      </>
    );
  }
}

export default WayPath;
