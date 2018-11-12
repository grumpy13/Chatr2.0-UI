import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channelMessages: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channelMessages: action.payload,
        loading: false
      };

    case actionTypes.SET_CHANNEL_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
