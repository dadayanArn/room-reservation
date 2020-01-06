import api from '../api';
import { 
  getRoomsRequest, 
  getRoomsSuccsess, 
  getRoomsFailure, 
  getStatusRequest, 
  getStatusSuccsess, 
  getStatusFailure,
  createRoomRequest,
  createRoomSuccsess,
  createRoomFailure,
} from '../actions';

export const getRoomsThunk = () => async (dispatch, getState) => {
  try {
    dispatch(getRoomsRequest());
    const response = await api.rooms.get();
    if (response.status !== 200) {
      throw new Error('Cannot get Rooms')
    }
    dispatch(getRoomsSuccsess(response.data));
  } catch (error) {
    dispatch(getRoomsFailure());
  }
}

export const getStatusThunk = () => async (dispatch) => {
  try {
    dispatch(getStatusRequest());
    const response = await api.roomsStatus.get();
    if (response.status !== 200) {
      throw new Error('Cannot get status')
    }
    dispatch(getStatusSuccsess(response.data.status));
  } catch (error) {
    dispatch(getStatusFailure());
  }
}

export const createRoomThunk = (data) => async (dispatch) => {
  try {
    dispatch(createRoomRequest());
    const response = await api.rooms.post(data);
    if (response.status !== 200) {
      throw new Error('Cannot get status')
    }
    dispatch(createRoomSuccsess(response.data));
    dispatch(getRoomsThunk());
    dispatch(getStatusThunk());
  } catch (error) {
    dispatch(createRoomFailure());
  }
}