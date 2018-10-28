import { DATABASE_ERROR } from '../actions/databaseErrorActions'

const initialState = {
  error: false,
  message: '',
}

const databaseErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATABASE_ERROR:
      return {
        error: true,
        message: action.payload,
      }

    default:
      return state
  }
}

export default databaseErrorReducer
