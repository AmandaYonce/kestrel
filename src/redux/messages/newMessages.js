import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/messages";

const ADDNEWMESSAGE = createActions("addNewMessage");
export const addNewMessage = messageData => dispatch => {
  dispatch(ADDNEWMESSAGE.START());

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(ADDNEWMESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(ADDNEWMESSAGE.FAIL(err))));
};

export const reducers = {
  addNewMessage: createReducer(asyncInitialState, {
    ...asyncCases(ADDNEWMESSAGE)
  })
};

export default connect(
  state => ({
    result: state.auth.addNewMessage.result,
    loading: state.auth.addNewMessage.loading,
    error: state.auth.addNewMessage.error
  }),
  { addNewMessage }
)(newMessages);
