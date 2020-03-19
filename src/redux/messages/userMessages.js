
import {
    handleJsonResponse,
    createActions,
    getInitStateFromStorage,
    createReducer,
    asyncCases,
  } from "../helpers";

export const USERMESSAGES = createActions("userMessages");
export const userMessages = (user) => (dispatch) => {
    dispatch(USERMESSAGES.START())
    

  return fetch("https://kwitter-api.herokuapp.com/messages?username="+ user)
    .then(handleJsonResponse)
    .then(result =>{
      result=Object.keys(result.messages).map(key=>result.messages[key])
      dispatch({
        type: USERMESSAGES.SUCCESS,
        payload: result
      })
    })
    
};

const initialState={
  result: null,
  loading: false,
  error: null
}


export const userMessagesReducers = {
  userMessages: createReducer(getInitStateFromStorage("userMessages", initialState), {...asyncCases(USERMESSAGES)}), 
  }
