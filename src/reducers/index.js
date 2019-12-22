import { combineReducers } from 'redux';
import roomsReducer from './rooms.reducer';

export default combineReducers({
  rooms: roomsReducer
});

