import { combineReducers } from 'redux-immutable'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default function configureReducers (reducers) {
  return combineReducers({
    ...reducers,
    loadingBar: loadingBarReducer
  })
}
