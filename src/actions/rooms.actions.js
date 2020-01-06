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

export const getRoomsRequest = () => ({
  type: 'GET_ROOMS_REQUEST'
})

export const getRoomsSuccsess = (data) => ({
  type: 'GET_ROOMS_SUCCSESS',
  payload: data
})

export const getRoomsFailure = () => ({
  type: 'GET_ROOMS_FAILURE'
})

export const createRoomRequest = (data) => ({
  type: 'CREATE_ROOM_REQUEST',
  payload: data
})

export const createRoomSuccsess = (data) => ({
  type: 'CREATE_ROOM_SUCCSESS',
  payload: data
})

export const createRoomFailure = () => ({
  type: 'CREATE_ROOM_FAILURE'
})