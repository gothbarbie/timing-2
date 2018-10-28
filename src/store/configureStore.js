import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryReducer from '../reducers/categoryReducer'
import categoriesFilterReducer from '../reducers/categoriesFilterReducer'
import modalReducer from '../reducers/modalReducer'
import weekReducer from '../reducers/weekReducer'
import tagsReducer from '../reducers/tagsReducer'
import timeSlotsReducer from '../reducers/timeSlotsReducer'
import databaseErrorReducer from '../reducers/databaseErrorReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  categoriesFilter: categoriesFilterReducer,
  modal: modalReducer,
  tags: tagsReducer,
  week: weekReducer,
  timeSlots: timeSlotsReducer,
  error: databaseErrorReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
