import {
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "../helpers";
 
  const RANDOMQUOTE = createActions("randomQuote");
  export const randomQuote = () => (dispatch) => {
    dispatch(RANDOMQUOTE.START());
  
    return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(handleJsonResponse)
      .then(result=>{
        dispatch(RANDOMQUOTE.SUCCESS(result.text))
      })
      .catch(err => Promise.reject(dispatch(RANDOMQUOTE.FAIL(err))));
  
}
  
  export const randomQuoteReducer = {
    randomQuote: createReducer(asyncInitialState, {
      ...asyncCases(RANDOMQUOTE)
    })
  };