import { store } from "../index";
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
import { logout } from "../auth";

const url = domain;

const DELETEUSER = createActions("deleteUser");
export const deleteUser = () => (dispatch, getState) => {
  const state = store.getState();
  const token = state.auth.login.result.token;
  const username = getState().auth.login.result.username;
  dispatch(DELETEUSER.START());

  return dispatch(logout())
    .then(
      fetch(url + "/users/" + username, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token, ...jsonHeaders }
      })
    )
    .then(handleJsonResponse)
    .then(result => {
      dispatch(DELETEUSER.SUCCESS(result));
    })
    .catch(err => {
      return Promise.reject(dispatch(DELETEUSER.FAIL(err)));
    });
};

export const reducers = {
  register: createReducer(
    getInitStateFromStorage("deleteUser", asyncInitialState),
    {
      ...asyncCases(DELETEUSER),
      [DELETEUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }
  )
};
