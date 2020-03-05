import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "../helpers";
import { getMessages } from "./getMessages";

const url = domain + "/messages";

const ADDNEWMESSAGE = createActions("addNewMessage");
export const addNewMessage = messageData => (dispatch, getState) => {
  dispatch(ADDNEWMESSAGE.START());

  const token = getState().auth.login.result.token;

  dispatch(getMessages());

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageData })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(ADDNEWMESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(ADDNEWMESSAGE.FAIL(err))));
};

export const newMessageReducer = {
  addNewMessage: createReducer(asyncInitialState, {
    ...asyncCases(ADDNEWMESSAGE)
  })
};
