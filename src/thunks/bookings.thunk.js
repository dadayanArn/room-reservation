import api from '../api';
import { getBookingsRequest, getBookingsSuccsess, getBookingsFailure } from '../actions';

export const getBookingsThunk = () => async (dispatch) => {
  try {
    dispatch(getBookingsRequest());
    const response = await api.bookings.get();
    if (response.status !== 200) {
      throw new Error('Cannot get Bookings')
    }
    dispatch(getBookingsSuccsess(response.data));
  } catch (error) {
    dispatch(getBookingsFailure());
  }
}