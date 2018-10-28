import db from '../firebase/firebase'

import { databaseError } from './databaseErrorActions'

export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const CREATE_TAG_SUCCESS = 'CREATE_TAG_SUCCESS'
export const CREATE_TAG_FAIL = 'CREATE_TAG_FAIL'

export const addTag = ({ id, blue, name }) => ({
  type: ADD_TAG,
  payload: { id, blue, name },
})

export const remove = id => ({
  type: REMOVE_TAG,
  payload: id,
})

const createTagSuccess = ({ id, blue, name }) => ({
  type: CREATE_TAG_SUCCESS,
  payload: { id, blue, name },
})

const createTagFail = ({ id, blue, name }) => ({
  type: CREATE_TAG_FAIL,
  payload: { id, blue, name },
})

export const createTagInDatabase = ({ id, blue, name }) => dispatch => {
  const tag = { blue, name }
  db.ref(`tag/${id}`)
    .set(tag)
    .then(() => {
      dispatch(createTagSuccess({ id, blue, name }))
    })
    .catch(error => {
      dispatch(createTagFail({ id, blue, name }))
      dispatch(databaseError(error))
    })
}
