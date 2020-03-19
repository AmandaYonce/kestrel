import {
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer,
    getInitStateFromStorage
  } from "../helpers";


  const WELCOMEMODAL = createActions("welcomeModal");
  export const welcomeModal = (modal) => (dispatch) => {
        //dispatch(WELCOMEMODAL.START());
    
       return dispatch(WELCOMEMODAL.SUCCESS(modal))
      
  };
  
  export const modalReducer = {
    welcomeModal: createReducer(getInitStateFromStorage("welcomeModal", asyncInitialState), {
      ...asyncCases(WELCOMEMODAL)
    })
  };