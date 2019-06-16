import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  setTripBus,
  setTripDriver,
  setTripList,
  setTripTeacher,
  setTripWayPath
} from "./actions";
import { children, buses, drivers, teachers } from "./data";

const childrenList = handleActions({}, children);
const busesList = handleActions({}, buses);
const driversList = handleActions({}, drivers);
const teachersList = handleActions({}, teachers);

const bus = handleActions(
  {
    [setTripBus]: (state, action) => {
      console.log(action);
      return { ...action.payload };
    }
  },
  {}
);

const driver = handleActions(
  {
    [setTripDriver]: (state, action) => action.payload
  },
  {}
);

const teacher = handleActions(
  {
    [setTripTeacher]: (state, action) => action.payload
  },
  {}
);

const list = handleActions(
  {
    [setTripList]: (state, action) => action.payload
  },
  []
);
const wayPath = handleActions(
  {
    [setTripWayPath]: (state, action) => action.payload
  },
  { dep: "", arr: "" }
);

const trip = combineReducers({
  bus,
  driver,
  teacher,
  list,
  wayPath
});

export default combineReducers({
  childrenList,
  busesList,
  driversList,
  teachersList,
  trip
});
