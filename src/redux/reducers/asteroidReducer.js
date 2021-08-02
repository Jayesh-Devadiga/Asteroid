import { BACK_TO_HOME, ERROR, FETCH_ASTEROID } from "../actions/types";

const initialState = {
  asteroidDetails: {},
  showingAsteroidDetails: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASTEROID:
      return {
        ...state,
        asteroidDetails: action.payload,
        showingAsteroidDetails: true,
      };
    case BACK_TO_HOME:
      return {
        ...state,
        asteroidDetails: {},
        showingAsteroidDetails: false,
        error: "",
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
