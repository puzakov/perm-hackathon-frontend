import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import auth, { sagas as authSaga } from "./Auth";
import admin from "./Admin";
// import map, { sagas as mapSaga } from "./Map";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth,
  form: formReducer,
  admin,
  // map
});

export function* rootSaga() {
  yield fork(authSaga);
  // yield fork(mapSaga);
}
