import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channelsList: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channelsList: action.payload,
        loading: false
      };
    case actionTypes.ADD_CHANNEL:
      return {
        ...state,
        channelsList: [action.payload].concat(state.channelsList)
      };

    default:
      return state;
  }
};

export default reducer;
