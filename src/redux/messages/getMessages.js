
import {
    handleJsonResponse,
    createActions,
    getInitStateFromStorage,
    createReducer,
    asyncCases,
  
  } from "../helpers";

export const GETMESSAGES = createActions("getMessages");
export const getMessages = () => (dispatch) => {
    dispatch(GETMESSAGES.START())
    

  return fetch("https://kwitter-api.herokuapp.com/messages?limit=200&offset=0")
    .then(handleJsonResponse)
    .then(result =>{
      result=Object.keys(result.messages).map(key=>result.messages[key])
      dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      })
      //dispatch(getFriends(result))
    })
    
};

const initialState={
  result: null,
  loading: false,
  error: null
}

/*
  //let bookmarks= []
  //let friendslist=[]
  let friends={}
  
export const GETFRIENDS=createActions("getFriends")
export const getFriends = ()=>(dispatch)=>{
  dispatch(GETFRIENDS.START())
    const state=store.getState()
    const user=state.auth.login.result.username
    const messages=state.messages.getMessages.result

    messages.map((each)=>{
        if(each.likes.length>0  && each.username !== user ){
          //console.log(each.likes)
         each.likes.filter((like)=>{
            if(like.username===user){
              friendslist.push(each.username)
              bookmarks.push(each)
              console.log(like.username)
              return true
            }return false
          }) 
          
        } 
    })
   
    friendslist=[...new Set(friendslist)]
    friends[friendslist]=friendslist
    friends[bookmarks]=bookmarks
   
    console.log(friends)
    return  dispatch(GETFRIENDS.SUCCESS(friends))

}
*/
export const messageReducers = {
  getMessages: createReducer(getInitStateFromStorage("getMessages", initialState), {...asyncCases(GETMESSAGES)}), 
  }
/*
  export const friendsReducer={
    getFriends: createReducer(getInitStateFromStorage("getFriends", asyncInitialState), {
      ...asyncCases(GETFRIENDS)})
  }
*/
