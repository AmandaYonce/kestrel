import {
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
    getInitStateFromStorage
  } from "../../helpers";


  const FAILEDLOGINMODAL = createActions("failedLoginModal");
  export const failedLoginModal = (modal) => (dispatch) => {
        
    
       return dispatch(FAILEDLOGINMODAL.SUCCESS(modal))
      
  };
  
  export const failedLoginReducer = {
    failedLoginModal: createReducer(getInitStateFromStorage("failedLoginModal", asyncInitialState), {
      ...asyncCases(FAILEDLOGINMODAL)
    })
  };