import {USERINFO} from "../../account/userInfo"

  const initialState={
      result: null,
      loading: false,
      error: null
  }

  const userInfo=(state=initialState, action)=>{
      switch(action.type){
          case USERINFO.START:
              return {
                  ...state, 
                  loading: true,
                  error: null
              }
            case USERINFO.SUCCESS:
                return {
                    ...state,
                    result: action.payload,
                    loading: false
                }
                case USERINFO.FAIL:
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

  export default userInfo