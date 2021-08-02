import API from "../../utils/API";
import { BACK_TO_HOME, ERROR, FETCH_ASTEROID } from "./types";
const API_KEY = "XEXvkyZvA8JUgfjddI8fKVChSOOv2zdgMeoLl4Xa";

export const fetchAsteroid = (id) => async (dispatch) => {
  const convertedID = Number(id);
  let error = "";
  if (Number.isNaN(convertedID) || id.length !== 7) {
    error = "The asteroid id should be a 7-digit integer (Ex: 2000433)";
    dispatch({ type: ERROR, payload: error });
  } else {
    try {
      const data = await API.get(`${id}?api_key=${API_KEY}`);
      console.log(data.data);
      dispatch({ type: FETCH_ASTEROID, payload: data.data });
    } catch (err) {
      error = "Could not find asteroid with the given id.";
      dispatch({ type: ERROR, payload: error });
    }
  }
};

export const fetchRandomAsteroid = () => async (dispatch) => {
  const asteroids = await API.get(`browse?api_key=${API_KEY}`);
  const asteroidsArray = asteroids.data.near_earth_objects;
  console.log(asteroidsArray);
  const randomAsteroidID = asteroidsArray[Math.floor(Math.random() * (asteroidsArray.length - 1))].id;
  console.log(randomAsteroidID);
  const data = await API.get(`${randomAsteroidID}?api_key=${API_KEY}`);
  console.log(data);
  dispatch({ type: FETCH_ASTEROID, payload: data.data });
};

export const backToHome = () => {
  return {
    type: BACK_TO_HOME,
  };
};
