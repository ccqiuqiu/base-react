import { createStore } from 'redux'
import configureReducers from './configureReducers'
import middlewares, {sagaMiddleware} from './middlewares'

export default function configureStore (reducerRegistry, initialState) {
  const coreReducer = configureReducers(reducerRegistry.getReducers())
  const store = createStore(coreReducer, initialState, middlewares)
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers))
  })
  store.runSaga = sagaMiddleware.run
  return store
}
