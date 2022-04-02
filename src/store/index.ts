import { createStore, applyMiddleware, combineReducers } from 'redux'
import titleReducer from '@/store/reducers/title'
import thunk from 'redux-thunk'
export default createStore(combineReducers({
  title: titleReducer
}), applyMiddleware(thunk))
