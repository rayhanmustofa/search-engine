import { SET_CONTACTS } from "../actions/actionType"

const initialState = { contacts : []}


function displayReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...initialState, contacts : action.payload }
    default:
      return state
  }
}


export default displayReducer