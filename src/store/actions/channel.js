import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

const setLoading = () => ({
  type: actionTypes.SET_CHANNEL_LOADING
});

export const fetchChannelDetail = CHANNEL_ID => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`channels/${CHANNEL_ID}/`)
      .then(res => res.data)
      .then(channelMessages =>
        dispatch({
          type: actionTypes.FETCH_CHANNEL_DETAIL,
          payload: channelMessages
        })
      )
      .catch(err => {
        dispatch(setErrors(err.response.data));
      });
  };
};
