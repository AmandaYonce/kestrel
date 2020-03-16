import {
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "../helpers";

  function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    console.log("ok")
    return response;
  }
 
  const RANDOMQUOTE = createActions("randomQuote");
  export const randomQuote = () => (dispatch) => {
    dispatch(RANDOMQUOTE.START());
  
    return fetch("http://quotes.stormconsultancy.co.uk/quotes/39")
      .then(function(res){
        return res.json()})
      
      .then(function(data){
        console.log(data)
      //.catch(err => Promise.reject(dispatch(RANDOMQUOTE.FAIL(err))));
  })
}
  
  export const randomQuoteReducer = {
    randomQuote: createReducer(asyncInitialState, {
      ...asyncCases(RANDOMQUOTE)
    })
  };