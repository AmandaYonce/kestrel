import {GETMESSAGES} from "../../messages/getMessages"

  const initialState={
      result: null,
      loading: false,
      error: null
  }

  const getMessages=(state=initialState, action)=>{
      switch(action.type){
          case GETMESSAGES.START:
              return {
                  ...state, 
                  loading: true,
                  error: null
              }
            case GETMESSAGES.SUCCESS:
                return {
                    ...state,
                    result: action.payload,
                    loading: false
                }
                case GETMESSAGES.FAIL:
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

  export default getMessages