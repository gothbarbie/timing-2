import { REMOVE_CATEGORY, UPDATE_CATEGORY } from './categoryConstants'

export const removeCategory = id => ({
  type: REMOVE_CATEGORY,
  payload: { id },
})

export const updateCategory = (id, name) => ({
  type: UPDATE_CATEGORY,
  payload: { id, name },
})
