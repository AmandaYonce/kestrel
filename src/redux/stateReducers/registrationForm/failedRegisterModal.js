import {
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
    getInitStateFromStorage
  } from "../../helpers";


  const FAILEDREGISTERMODAL = createActions("failedRegisterModal");
  export const failedRegisterModal = (modal) => (dispatch) => {
        
    
       return dispatch(FAILEDREGISTERMODAL.SUCCESS(modal))
      
  };
  
  export const failedRegisterReducer = {
    failedRegisterModal: createReducer(getInitStateFromStorage("failedRegisterModal", asyncInitialState), {
      ...asyncCases(FAILEDREGISTERMODAL)
    })
  };