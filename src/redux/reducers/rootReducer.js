import dashboardReducer from "./dashboardReducer";
import { combineReducers } from 'redux';
//import simpleReducer from './simpleReducer';

export default combineReducers({
  //simpleReducer
  dashboardReducer:dashboardReducer
});