import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelsReducer from "./channels";
import channelReducer from "./channel";

export default combineReducers({
  auth: authReducer,
  channels: channelsReducer,
  channel: channelReducer,
  errors: errorReducer
});
