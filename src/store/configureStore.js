import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryReducer from '../components/molecules/Category/categoryReducer'
import categoriesFilterReducer from '../components/molecules/SearchCategories/categoriesFilterReducer'
import modalReducer from '../components/molecules/Modal/modalReducer'
import weekReducer from '../components/organisms/WeekNavigation/weekReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  categoriesFilter: categoriesFilterReducer,
  modal: modalReducer,
  week: weekReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
