import {
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "../helpers";

  
  const WELCOMEMODAL = createActions("welcomeModal");
  export const welcomeModal = (e, modal) => (dispatch) => {
        dispatch(WELCOMEMODAL.START());
    
        dispatch(WELCOMEMODAL.SUCCESS(modal))
      return modal
  };
  
  export const modalReducer = {
    welcomeModal: createReducer(asyncInitialState, {
      ...asyncCases(WELCOMEMODAL)
    })
  };