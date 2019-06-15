import React from "react";
import ReactDOM from "react-dom";
import "./_variables.css";
import "./_fonts.css";
import "./_reset.css";
import "./ui.css";
import "./layout.css";
import App from "./components/App";
import createStore from "./store";
import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

const store = createStore();
// const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
