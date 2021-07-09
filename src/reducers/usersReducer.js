import { TYPES } from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const transformData = (payload) => {
  return  payload.map((element) => {
    return {
      id: element.owner.id,
      name: element.owner.login,
      date: element.created_at.slice(0, 10),
      time: element.created_at.slice(11, 19),
      keyword: "WebServer",
      notebookName: Object.keys(element.files),
      starShare: "star",
      avatar_url: element.owner.avatar_url,
      files: element.files,
    };
  });
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SUCCESS:
      return {
        ...state,
        users: transformData(action.payload),
        loading: false,
      };

    default:
      return state;
  }
};
