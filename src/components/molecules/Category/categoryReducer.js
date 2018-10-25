import { REMOVE_CATEGORY, UPDATE_CATEGORY } from './categoryConstants'

const initialState = {
  abc123: { name: 'test-1' },
  def456: { name: 'test-2' },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CATEGORY:
      delete state[action.payload.id]

      return { ...state }

    case UPDATE_CATEGORY:
      return { ...state, [action.payload.id]: { name: action.payload.name } }

    default:
      return state
  }
}
