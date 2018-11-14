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

export const addChannel = (NEW_CHANNEL_NAME, history) => {
  return dispatch => {
    instance
      .post("channels/create/", NEW_CHANNEL_NAME)
      .then(res => res.data)
      .then(createdChannel => {
        dispatch({
          type: actionTypes.ADD_CHANNEL,
          payload: createdChannel
        });
        history.push(`/channels/${createdChannel.id}`);
      })
      .catch(err => {
        if (err.response) {
          dispatch(setErrors(err.response.data));
        } else {
          console.error(err);
        }
      });
  };
};
