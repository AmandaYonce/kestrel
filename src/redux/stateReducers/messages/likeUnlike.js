/*

import {LIKEUNLIKE} from "../../messages/likeUnlike"

  const initialState={
      result: null,
      loading: false,
      error: null
  }

  const likeUnlike=(state=initialState, action)=>{
      switch(action.type){
          case LIKEUNLIKE.START:
              return {
                  ...state, 
                  loading: true,
                  error: null
              }
            case LIKEUNLIKE.SUCCESS:
                return {
                    ...state,
                    result: action.payload,
                    loading: false
                }
                case LIKEUNLIKE.FAIL:
                    return{
                        ...state,
                        error: action.payload,
                        loading: false
                    }
                    default:
                        return state;
      }
  }

  //export default createReducer(GETMESSAGES, getMessages)

  export default likeUnlike

  */