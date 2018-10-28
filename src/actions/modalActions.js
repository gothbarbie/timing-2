export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export const closeModal = () => ({
  type: HIDE_MODAL,
})

export const openModal = content => ({
  type: SHOW_MODAL,
  payload: content,
})
