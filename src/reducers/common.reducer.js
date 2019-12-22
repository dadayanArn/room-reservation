const initialState = {

};

export default function commonReducer(state = initialState, action) {
  switch(action.type) {
    case 'INIT_APP': 
      return { ...state }
    default:
      return state;
  }
}