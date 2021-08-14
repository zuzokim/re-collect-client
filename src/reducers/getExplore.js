import initialState from "./initialState";

export const getExploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO":
      return Object.assign({}, state, {
        users: action.payload,
      });
    default:
      return null;
  }
};
