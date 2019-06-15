import React, { Component } from "react";
import styles from "./Map.module.css";

class Map extends Component {
  render() {
    return (
      <>

        <header class={'header'}>

          <div class={'header__logo'}>
            <span>Школьный Автобус</span>
            <i>Родитель</i>
          </div>

        </header>



        <div className={[['content'],['-no-scroll']].join(' ')}>

          <div className={[styles['map'],styles['-show-info'],styles['-scaled-step-1'],styles['-scaled-step-2'],styles['-scaled-step-3']].join(' ')}>
            
            <div className={styles['map__image']}></div>

            <div className={styles['map__speed']}>87 км/час</div>

            <div className={styles['map__controls']}>
              <button className={[styles['map__controls__item'],styles['-plus']].join(' ')}></button>
              <button className={[styles['map__controls__item'],styles['-minus']].join(' ')}></button>
              <button className={[styles['map__controls__item'],styles['-expand']].join(' ')}></button>
              <button className={[styles['map__controls__item'],styles['-location']].join(' ')}></button>
            </div>

          </div>

          <div className={styles['info']}>
            
            <button className={styles['info__trigger']}></button>

            <div className={styles['info__content']}>
              
              <h6 className={'ui-title'}>Водитель</h6>

              <div className={'ui-card'}>
                <div className={[['ui-card__image'],['-vehicle']].join(' ')}></div>
                <div className={'ui-card__info'}>
                  <div className={'ui-card__info__name'}>Кондратьев<br/>Иван Юрьевич</div>
                  <div className={'ui-card__info__post'}>Ford Transit</div>
                </div>
              </div>

              <hr class="ui-line"/>
              
              <h6 className={'ui-title'}>Сопровождающий</h6>

              <div className={'ui-card'}>
                <div className={[['ui-card__image'],['-person']].join(' ')}></div>
                <div className={'ui-card__info'}>
                  <div className={'ui-card__info__name'}>Гилюкова<br/>Елена Евгеньевна</div>
                  <div className={'ui-card__info__post'}>Классный руководитель</div>
                </div>
              </div>

              <hr class="ui-line"/>
              
              <h6 className={'ui-title'}>Динамическая информация о поездке</h6>

              <div className={'ui-kv'}>
                <div className={'ui-kv__item'}>
                  <label className={'ui-kv__item__label'}>Расстояние</label>
                  <div className={'ui-kv__item__value'}>16 <span>из</span> 47 <span>км</span></div>
                </div>
                <div className={'ui-kv__item'}>
                  <label className={'ui-kv__item__label'}>Время</label>
                  <div className={'ui-kv__item__value'}>22:07 <span>из</span> 61 <span>мин.</span></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </>
    );
  }
}

export default Map;
