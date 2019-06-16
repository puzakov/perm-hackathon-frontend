import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { addTrip } from "./actions";
import { children, buses, drivers, teachers } from "./data";

const childrenList = handleActions({}, children);
const busesList = handleActions({}, buses);
const driversList = handleActions({}, drivers);
const teachersList = handleActions({}, teachers);
const trip = handleActions({
  [addTrip]: (state, action) => action.payload
}, {});


export default combineReducers({
  childrenList,
  busesList,
  driversList,
  teachersList,
  trip
});
