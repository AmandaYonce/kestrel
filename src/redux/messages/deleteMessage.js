import {store} from "../../redux/index"
import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "../helpers";
  import { getMessages } from "./getMessages";

const url=domain

const DELETEMESSAGE=createActions("deleteMessage")
export const deleteMessage = (e, messageID) => dispatch =>{

      const state=store.getState()
      const token=state.auth.login.result.token

      dispatch(DELETEMESSAGE.START())

    return fetch(url +"/messages/" + messageID, {
        method: "DELETE",
        headers: { Authorization: "Bearer "+ token, ...jsonHeaders}
    })
      .then(handleJsonResponse)
      .then(result => {
          dispatch(getMessages())
          dispatch(DELETEMESSAGE.SUCCESS(result))
      })
      .catch(err=> {
      return Promise.reject(dispatch(DELETEMESSAGE.FAIL(err)))
    })
}


  export const deleteMessageReducer = {
    delete: createReducer(getInitStateFromStorage("deleteMessage", asyncInitialState), {
      ...asyncCases(DELETEMESSAGE),
    }),
    
  };