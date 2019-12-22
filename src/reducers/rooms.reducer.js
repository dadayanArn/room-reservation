const initialState = {
  gettingStatus : false,
  status        : {
    rooms: 0,
    booking: 0,
    visitors: 0
  }
};

export default function roomsReducer(state = initialState, action) {
  switch(action.type) {
    
    case 'GET_STATUS_REQUEST': 
      return {
        ...state,
        gettingStatus: true,
      }
    case 'GET_STATUS_SUCCSESS': 
    return {
      ...state,
      gettingStatus: false,
      status: action.payload
    }
    case 'GET_STATUS_FAILURE': 
    return {
      ...state,
      gettingStatus: false,
    }
    default:
      return state;
  }
}