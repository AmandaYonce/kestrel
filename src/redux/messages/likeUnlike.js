
import {
    handleJsonResponse,
    createActions,
    jsonHeaders,
    domain
  } from "../helpers";

const url=domain+"/auth" 

export const LIKEUNLIKE = createActions("likeUnlike");
export const likeUnlike = (messageData) => (dispatch, getState) => {
    dispatch(LIKEUNLIKE.START())

const token=getState().auth.login.result.token

  return fetch(url +"/likes", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders},
      body: JSON.stringify({messageId: messageData})
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LIKEUNLIKE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LIKEUNLIKE.FAIL(err))))
    
};