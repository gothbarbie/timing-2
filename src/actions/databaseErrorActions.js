export const DATABASE_ERROR = 'DATABASE_ERROR'

export const databaseError = error => ({
  type: DATABASE_ERROR,
  payload: error.message,
})
