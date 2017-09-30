import configureStore from './configureStore'
import ReducerRegistry from './reducerRegistry'
import * as coreReducers from '../module/common/reducers'
// import rootSaga from '../module/sagaIndex'

const reducerRegistry = new ReducerRegistry(coreReducers)
const store = configureStore(reducerRegistry)

// 启动saga
// store.runSaga(rootSaga)
store.reducerRegistry = reducerRegistry
window.$store = store

export default store
