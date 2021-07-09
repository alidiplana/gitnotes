import { TYPES } from "./actionTypes";

export const fetchUser =  () => {
  return dispatch => {
    fetch("https://api.github.com/gists").then(response => response.json()).then((res) => {
        return dispatch({
            type: TYPES.SUCCESS,
            payload: res
        });
    });
  }
  
};
