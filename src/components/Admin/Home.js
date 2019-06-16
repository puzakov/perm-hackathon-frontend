import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        
        <header class={"header"}>
          <div class={"header__logo"}>
            <span>РЕБЁНОК В ПУТИ</span>
            <i>Автобус онлайн</i>
          </div>
        </header>

        <div className={[["content"], ["-no-scroll"], ['-padding']].join(" ")}>
          
          <button className={'ui-add'}>Новая поездка</button>

          <div className={'ui-tabs'}>
            <div className={[['ui-tabs__item'],['-active']].join(' ')}>Автобус</div>
            <div className={'ui-tabs__item'}>Маршрут</div>
            <div className={'ui-tabs__item'}>Информация</div>
            <div className={'ui-tabs__item'}>Список</div>
          </div>

        </div>

      </>
    );
  }
}

export default Home;