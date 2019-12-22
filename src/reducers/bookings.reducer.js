const initialState = {
  gettingBookings: false,
  bookings: []
};

export default function bookingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKINGS_REQUEST':
      
      return {
        ...state,
        gettingBookings: true
      }
     case 'GET_BOOKINGS_SUCCSESS':
     
       return {
         ...state,
         gettingBookings: false,
         bookings: action.payload
       }
 
     case 'GET_BOOKINGS_FAILURE':
       
       return {
         ...state,
         gettingBookings: false
       }
    default:
      return state
  }
}