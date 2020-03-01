
import {
    handleJsonResponse,
    createActions,
  } from "../helpers";

export const GETMESSAGES = createActions("getMessages");
export const getMessages = () => (dispatch) => {
    dispatch({
        type: GETMESSAGES.START
    })


  return fetch("https://kwitter-api.herokuapp.com/messages?limit=300&offset=0")
    .then(handleJsonResponse)
    .then(result =>{
      result=Object.keys(result.messages).map(key=>result.messages[key])
      return dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      })
    })
    .catch(err => {
        return Promise.reject(dispatch({ type:
        GETMESSAGES.Fail, payload: err}))
    })
};

