import axios from "axios";
import { setErrors } from "./errors";
import * as actionTypes from "../actions/actionTypes";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const fetchChannels = () => {
  return dispatch => {
    instance
      .get("channels/")
      .then(res => res.data)
      .then(channels =>
        dispatch({ type: actionTypes.FETCH_CHANNELS, payload: channels })
      )
      .catch(err => {
        dispatch(setErrors(err.response.data));
      });
  };
};
