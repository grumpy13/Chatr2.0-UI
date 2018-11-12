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

export const addMessage = (CHANNEL_ID, NEW_MESSAGE, user) => {
  return dispatch => {
    instance
      .post(`channels/${CHANNEL_ID}/send/`, NEW_MESSAGE)
      .then(res => res.data)
      .then(createdMessage => {
        // console.log(createdMessage);
        dispatch({
          type: actionTypes.ADD_MESSAGE,
          // payload: { username: user, message: createdMessage.message }
          payload: { ...createdMessage, username: user }
        });
      })
      .catch(err => {
        console.log(err);
        // dispatch(setErrors(err.response.data));
      });
  };
};
