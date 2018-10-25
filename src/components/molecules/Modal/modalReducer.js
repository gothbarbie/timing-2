import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

const initialState = { content: 'addEvent', visible: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { content: action.payload.content, visible: true }

    case HIDE_MODAL:
      return { ...state, visible: false }

    default:
      return state
  }
}
