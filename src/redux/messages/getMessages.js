
import {
    handleJsonResponse,
    createActions,
    getInitStateFromStorage,
    createReducer,
    asyncCases
  } from "../helpers";

export const GETMESSAGES = createActions("getMessages");
export const getMessages = () => (dispatch) => {
    dispatch(GETMESSAGES.START())


  return fetch("https://kwitter-api.herokuapp.com/messages?limit=200&offset=0")
    .then(handleJsonResponse)
    .then(result =>{
      result=Object.keys(result.messages).map(key=>result.messages[key])
      dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      })
    })
    .catch(err => {
        return Promise.reject(dispatch({ type:
        GETMESSAGES.Fail, payload: err}))
    })
};

const initialState={
  result: null,
  loading: false,
  error: null
}

export const messageReducers = {
  getMessages: createReducer(getInitStateFromStorage("getMessages", initialState), {...asyncCases(GETMESSAGES)})
  }

  
