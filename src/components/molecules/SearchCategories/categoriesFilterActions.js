import { SET_CATEGORIES_FILTER } from './categoriesFilterConstants'

export const setCategoriesFilter = filter => ({
  type: SET_CATEGORIES_FILTER,
  payload: filter,
})
