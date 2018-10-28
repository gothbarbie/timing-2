export const INCREMENT_WEEK = 'INCREMENT_WEEK'
export const DECREMENT_WEEK = 'DECREMENT_WEEK'

export const nextWeek = () => ({
  type: INCREMENT_WEEK,
})

export const previousWeek = () => ({
  type: DECREMENT_WEEK,
})
