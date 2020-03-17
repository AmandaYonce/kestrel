
import {
  domain,
  handleJsonResponse,
  createActions,
  getInitStateFromStorage,
  createReducer,
  asyncCases,
  asyncInitialState
} from "../helpers";

const url=domain

export const USERINFO = createActions("userInfo");
export const userInfo = () => (dispatch, getState) => {
    dispatch(USERINFO.START())

    const username=getState().auth.login.result.username
    
  return fetch(url + "/users/"+ username)
    .then(handleJsonResponse)
    .then(result =>{
        dispatch({
            type: USERINFO.SUCCESS,
            payload: result.user
        })
    })
    .catch(err => {
        return Promise.reject(dispatch({ type:
        USERINFO.FAIL, payload: err}))
    })
};

export const FRIENDINFO = createActions("friendInfo");
export const friendInfo = (friend) => (dispatch) => {
    dispatch(FRIENDINFO.START())

  return fetch(url + "/users/"+ friend)
    .then(handleJsonResponse)
    .then(result =>{
        dispatch({
            type: FRIENDINFO.SUCCESS,
            payload: result.user
        })
    })
    .catch(err => {
        return Promise.reject(dispatch({ type:
        FRIENDINFO.FAIL, payload: err}))
    })
};

export const friendInfoReducer = {
  friendInfo: createReducer(getInitStateFromStorage("friendInfo", asyncInitialState), {...asyncCases(FRIENDINFO)}), 
  }