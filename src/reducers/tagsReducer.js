import { ADD_TAG, REMOVE_TAG } from '../actions/tagsActions'

const initialState = {
  abc123: {
    blue: true,
    name: 'tag',
  },
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG:
      return {
        ...state,
        [action.payload.id]: {
          blue: action.payload.blue,
          name: action.payload.name,
        },
      }

    case REMOVE_TAG:
      delete state[action.payload]
      return { ...state }

    default:
      return state
  }
}

export default tagsReducer
