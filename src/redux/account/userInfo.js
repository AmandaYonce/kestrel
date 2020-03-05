
import {
  domain,
  handleJsonResponse,
  createActions,
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