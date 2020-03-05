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
  import {logout} from "../auth"
    
    const url=domain
    
    const EDITPASSWORD = createActions("editUser");
    export const editPassword = (e, password) => (dispatch, getState) => {
        dispatch(EDITPASSWORD.START())
        
        const token=getState().auth.login.result.token
        const username=getState().auth.login.result.username
        console.log("fetch")

        dispatch(logout())
      return fetch(url + "/users/"+ username, {
          method: "PATCH",
          headers: { Authorization: "Bearer "+ token, ...jsonHeaders},
          body: JSON.stringify({password: password})
      })
        .then(handleJsonResponse)
        .then(result =>{
            dispatch({
                type: EDITPASSWORD.SUCCESS,
            })
        })
        .catch(err => {
            return Promise.reject(dispatch({ type:
            EDITPASSWORD.FAIL, payload: err}))
        })
    };
  
  
    export const editPassReducer = {
      editUser: createReducer(getInitStateFromStorage("editPassword", asyncInitialState), {
        ...asyncCases(EDITPASSWORD),
      })
    };