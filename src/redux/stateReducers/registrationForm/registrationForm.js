import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "../../helpers";
import { login } from "../../auth";
import {failedRegisterModal} from "./failedRegisterModal"

const url = domain;

const REGISTER = createActions("register");
export const register = registerData => dispatch => {
  dispatch(REGISTER.START());
  const loginData = {
    username: registerData.username,
    password: registerData.password
  };
  return fetch(url + "/users", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(login(loginData));
      dispatch(REGISTER.SUCCESS(result));
    })
    .catch(err => {
      dispatch(failedRegisterModal(true))
      Promise.reject(dispatch(REGISTER.FAIL(err)))
    })
};
export const reducers = {
  register: createReducer(
    getInitStateFromStorage("register", asyncInitialState),
    {
      ...asyncCases(REGISTER),
      [REGISTER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }
  )
};
