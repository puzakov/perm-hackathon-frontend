import React, { Component } from "react";
import styles from "./Map.module.css";
import classNames from "classnames";
import Header from "../Header";

class Map extends Component {
  state = {
    zoomPosition: 0,
    showInfo: false
  };

  handleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  handleZoomIn = () => {
    const { zoomPosition: oldZoom } = this.state;
    const newZoom = oldZoom < 3 ? oldZoom + 1 : oldZoom;
    this.setState({ zoomPosition: newZoom });
  };

  handleZoomOut = () => {
    const { zoomPosition: oldZoom } = this.state;
    const newZoom = oldZoom > 0 ? oldZoom - 1 : oldZoom;
    this.setState({ zoomPosition: newZoom });
  };

  render() {
    const { showInfo, zoomPosition } = this.state;
    return (
      <>
        <Header />
        <div className={[["content"], ["-no-scroll"]].join(" ")}>
          <div
            className={classNames({
              [styles["map"]]: true,
              [styles["-show-info"]]: showInfo,
              [styles["-scaled-step-1"]]: zoomPosition > 0,
              [styles["-scaled-step-2"]]: zoomPosition > 1,
              [styles["-scaled-step-3"]]: zoomPosition > 2
            })}
          >
            <div className={styles["map__image"]} />

            <div className={styles["map__speed"]}>87 км/час</div>

            <div className={styles["map__controls"]}>
              <button
                onClick={this.handleZoomIn}
                className={[
                  styles["map__controls__item"],
                  styles["-plus"]
                ].join(" ")}
              />
              <button
                onClick={this.handleZoomOut}
                className={[
                  styles["map__controls__item"],
                  styles["-minus"]
                ].join(" ")}
              />
              <button
                className={[
                  styles["map__controls__item"],
                  styles["-expand"]
                ].join(" ")}
              />
              <button
                className={[
                  styles["map__controls__item"],
                  styles["-location"]
                ].join(" ")}
              />
            </div>
          </div>

          <div className={styles["info"]}>
            <button
              onClick={this.handleShowInfo}
              className={styles["info__trigger"]}
            />

            <div className={styles["info__content"]}>
              <h6 className={"ui-title"}>Водитель</h6>

              <div className={"ui-card"}>
                <div className={[["ui-card__image"], ["-vehicle"]].join(" ")} />
                <div className={"ui-card__info"}>
                  <div className={"ui-card__info__name"}>
                    Кондратьев
                    <br />
                    Иван Юрьевич
                  </div>
                  <div className={"ui-card__info__post"}>Ford Transit</div>
                </div>
              </div>

              <hr className="ui-line" />

              <h6 className={"ui-title"}>Сопровождающий</h6>

              <div className={"ui-card"}>
                <div className={[["ui-card__image"], ["-person"]].join(" ")} />
                <div className={"ui-card__info"}>
                  <div className={"ui-card__info__name"}>
                    Гилюкова
                    <br />
                    Елена Евгеньевна
                  </div>
                  <div className={"ui-card__info__post"}>
                    Классный руководитель
                  </div>
                </div>
              </div>

              <hr className="ui-line" />

              <h6 className={"ui-title"}>Динамическая информация о поездке</h6>

              <div className={"ui-kv"}>
                <div className={"ui-kv__item"}>
                  <label className={"ui-kv__item__label"}>Расстояние</label>
                  <div className={"ui-kv__item__value"}>
                    16 <span>из</span> 47 <span>км</span>
                  </div>
                </div>
                <div className={"ui-kv__item"}>
                  <label className={"ui-kv__item__label"}>Время</label>
                  <div className={"ui-kv__item__value"}>
                    22:07 <span>из</span> 61 <span>мин.</span>
                  </div>
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
