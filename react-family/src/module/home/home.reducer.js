import * as type from './home.action-type'
const initState = {
 error: [],
 isloading: false,
 count: 0
}
const home = (state = initState, action) => {
 switch (action.type) {
     case type.INCREMENT.REQUEST:
         return {
             ...state,
             isloading: true,
         }
     case type.INCREMENT.SUCCESS:
         return {
             ...state,
             isloading: false,
             count: state.count+1
         }
     case type.INCREMENT.ERROR:
         return {
             ...state,
             isloading: false,
             error: state.error.concat(action.payload)
         }
     case type.DECREMENT.REQUEST:
         return {
             ...state,
             isloading: true,
         }
     case type.DECREMENT.SUCCESS:
         return {
             ...state,
             isloading: false,
             count: state.count - 1
         }
     case type.DECREMENT.ERROR:
         return {
             ...state,
             isloading: false,
             error: state.error.concat(action.payload)
         }
     case type.RESET.REQUEST:
         return {
             ...state,
             isloading: true,
         }
     case type.RESET.SUCCESS:
         return {
             ...state,
             isloading: false,
             count: 0
         }
     case type.RESET.ERROR:
         return {
             ...state,
             isloading: false,
             error: state.error.concat(action.payload)
         }
     default:
         return state
 }
}
export default home