import { SET_CATEGORIES_FILTER } from '../actions/categoriesFilterActions'

export default (state = '', action) => {
  switch (action.type) {
    case SET_CATEGORIES_FILTER:
      return action.payload

    default:
      return state
  }
}
