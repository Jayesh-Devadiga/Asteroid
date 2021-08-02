import { combineReducers } from "redux";
import asteroidReducer from "./asteroidReducer";

const rootReducer = combineReducers({
  asteroidReducer,
});

export default rootReducer;
