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
    
    const EDITPHOTO = createActions("editPhoto");
    export const editPhoto = (e, picture) => (dispatch, getState) => {
        dispatch(EDITPHOTO.START())
        
        const token=getState().auth.login.result.token
        const username=getState().auth.login.result.username
        console.log("fetch")
      return fetch(url + "/users/"+ username + "/picture", {
          method: "PUT",
          headers: { Authorization: "Bearer "+ token, ...jsonHeaders},
          body: {picture: picture}
      })
        .then(handleJsonResponse)
        .then(result =>{
          dispatch(userInfo())
            dispatch({
                type: EDITPHOTO.SUCCESS,
            })
        })
        .catch(err => {
            return Promise.reject(dispatch({ type:
            EDITPHOTO.FAIL, payload: err}))
        })
    };
  
  
    export const editPhotoReducer = {
      editUser: createReducer(getInitStateFromStorage("editPhoto", asyncInitialState), {
        ...asyncCases(EDITPHOTO),
      })
    };




    