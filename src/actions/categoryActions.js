export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

export const removeCategory = id => ({
  type: REMOVE_CATEGORY,
  payload: { id },
})

export const updateCategory = (id, name) => ({
  type: UPDATE_CATEGORY,
  payload: { id, name },
})
