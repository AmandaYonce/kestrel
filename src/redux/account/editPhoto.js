import {
    domain,
    getInitStateFromStorage,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "../helpers";
  import {userInfo} from "./userInfo"
  import axios from 'axios'

    
    const url=domain
    
    const EDITPHOTO = createActions("editPhoto");
    export const editPhoto = (e, picture) => (dispatch, getState) => {
        dispatch(EDITPHOTO.START())
        
        const token=getState().auth.login.result.token
        const username=getState().auth.login.result.username

        const headers = { Authorization: "Bearer "+ token}

      return axios.put(url + "/users/"+ username + "/picture", picture, {headers:headers})
          .then(result=> dispatch(userInfo()), dispatch(EDITPHOTO.SUCCESS()))

          .catch(err => {
            return Promise.reject(dispatch({ type:
            EDITPHOTO.FAIL, payload: err}))
        })
    }
  
  
    export const editPhotoReducer = {
      editUser: createReducer(getInitStateFromStorage("editPhoto", asyncInitialState), {
        ...asyncCases(EDITPHOTO),
      })
    };




    