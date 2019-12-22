const initialState = {
  getttingStatus: false,
  status: { 
    rooms    : 0,
    booking  : 0,
    visitors : 0
   },
  gettingRooms: false,
  rooms: []
};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_STATUS_REQUEST':
      
      return {
        ...state,
        getttingStatus: true
      }
     case 'GET_STATUS_SUCCSESS':
     
       return {
         ...state,
         getttingStatus: false,
         status: action.payload
       }
 
     case 'GET_STATUS_FAILURE':
       
       return {
         ...state,
         getttingStatus: false
       }
      case 'GET_ROOMS_REQUEST':
    
      return {
        ...state,
        gettingRooms: true
      }
      case 'GET_ROOMS_SUCCSESS':
      
        return {
          ...state,
          gettingRooms: false,
          rooms: action.payload
        }
  
      case 'GET_ROOMS_FAILURE':
        
        return {
          ...state,
          gettingRooms: false
        }
    
    default:
      return state
  }
}