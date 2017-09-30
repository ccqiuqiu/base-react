import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// redux-saga中间件
// 导出sagaMiddleware是因为saga需要在store创建完成后运行
export let sagaMiddleware = createSagaMiddleware()
export default applyMiddleware(
  sagaMiddleware
)
