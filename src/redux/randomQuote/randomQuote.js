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
  
    return fetch("http://quotes.stormconsultancy.co.uk/quotes/39", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    })
      .then(handleJsonResponse)
      .then(result => {
        console.log(result)
        dispatch(RANDOMQUOTE.SUCCESS(result))
      })
      .catch(err => Promise.reject(dispatch(RANDOMQUOTE.FAIL(err))));
  };
  
  export const randomQuoteReducer = {
    randomQuote: createReducer(asyncInitialState, {
      ...asyncCases(RANDOMQUOTE)
    })
  };