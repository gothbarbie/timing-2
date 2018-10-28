import { SET_TIMESLOTS } from '../actions/timeSlotsActions'

const initialState = {}

const timeSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMESLOTS:
      return action.payload

    default:
      return state
  }
}

export default timeSlotsReducer
