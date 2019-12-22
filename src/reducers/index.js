import { combineReducers } from 'redux';
import commonReducer from './common.reducer';
import visitorsReducer from './visitors.reducers';
import bookingsReducer from './bookings.reducer';
import roomsReducer from './rooms.reducer';

export default combineReducers({
  common   : commonReducer,
  bookings : bookingsReducer,
  visitors : visitorsReducer,
  rooms    : roomsReducer
});

