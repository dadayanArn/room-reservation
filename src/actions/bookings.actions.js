export const getBookingsRequest = () => ({
  type: 'GET_BOOKINGS_REQUEST'
})

export const getBookingsSuccsess = (data) => ({
  type: 'GET_BOOKINGS_SUCCSESS',
  payload: data
})

export const getBookingsFailure = () => ({
  type: 'GET_BOOKINGS_FAILURE'
})