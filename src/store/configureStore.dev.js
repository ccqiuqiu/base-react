import { createStore, compose } from 'redux'
import configureReducers from './configureReducers'
import middlewares, { sagaMiddleware } from './middlewares'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(middlewares)

export default function configureStore (reducerRegistry, initialState) {
  const coreReducer = configureReducers(reducerRegistry.getReducers())
  const store = createStore(
    coreReducer,
    initialState,
    enhancer
  )
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(configureReducers(reducers))
  })
  //
  // if (module.hot) {
  //   module.hot.accept('./rootRoutes.js', () => {
  //     const nextCoreReducers = require('./configureReducers')
  //     reducerRegistry.register(nextCoreReducers)
  //   })
  // }
  //
  store.runSaga = sagaMiddleware.run
  return store
}
