export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'

export const addTag = ({ id, blue, name }) => ({
  type: ADD_TAG,
  payload: { id, blue, name },
})

export const removeTag = id => ({
  type: REMOVE_TAG,
  payload: id,
})
