export const getStatusRequest = () => ({
  type: 'GET_STATUS_REQUEST'
})

export const getStatusSuccsess = (data) => ({
  type: 'GET_STATUS_SUCCSESS',
  payload: data
})

export const getStatusFailure = () => ({
  type: 'GET_STATUS_FAILURE'
})