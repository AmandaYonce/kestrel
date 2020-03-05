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
import {userInfo} from "./userInfo"
  
  const url=domain
  
  const EDITUSER = createActions("editUser");
  export const editUser = (e, password, about, displayName) => (dispatch, getState) => {
      dispatch(EDITUSER.START())
      
      const token=getState().auth.login.result.token
      const username=getState().auth.login.result.username
      console.log("fetch")
    return fetch(url + "/users/"+ username, {
        method: "PATCH",
        headers: { Authorization: "Bearer "+ token, ...jsonHeaders},
        body: JSON.stringify({password: password, about: about, displayName: displayName})
    })
      .then(handleJsonResponse)
      .then(result =>{
        dispatch(userInfo())
          dispatch({
              type: EDITUSER.SUCCESS,
          })
      })
      .catch(err => {
          return Promise.reject(dispatch({ type:
          EDITUSER.FAIL, payload: err}))
      })
  };


  export const editReducers = {
    editUser: createReducer(getInitStateFromStorage("editUser", asyncInitialState), {
      ...asyncCases(EDITUSER),
    })
  };