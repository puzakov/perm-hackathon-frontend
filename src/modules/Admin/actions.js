import { createAction } from "redux-actions";

export const setTripBus = createAction("ADMIN_TRIP/SET_BUS");
export const setTripDriver = createAction("ADMIN_TRIP/SET_DRIVER");
export const setTripTeacher = createAction("ADMIN_TRIP/SET_TEACHER");
export const setTripWayPath = createAction("ADMIN_TRIP/SET_WAY");
export const setTripList = createAction("ADMIN_TRIP/SET_LIST");
