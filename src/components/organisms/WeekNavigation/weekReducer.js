import { INCREMENT_WEEK, DECREMENT_WEEK } from './weekConstants.js'

const initialState = 1

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_WEEK:
      return state === 52 ? 1 : state + 1

    case DECREMENT_WEEK:
      return state === 1 ? 52 : state - 1

    default:
      return state
  }
}

export default weekReducer
