import React from 'react'
import Loadable from 'react-loadable'
const TodoList = Loadable({loader: () => import(/* webpackChunkName: "demo1" */ './view/TodoList'), loading: () => null})
const List = Loadable({loader: () => import(/* webpackChunkName: "demo1" */ './view/List'), loading: () => null})
// 异步加载模块
const Demo1Index = Loadable.Map({
  loader: {
    Component: () => import(/* webpackChunkName: "demo1" */ './view'),
    model: () => import(/* webpackChunkName: "demo1" */ './index').then(model => {
      window.$store.reducerRegistry.register(model.reducers)
      window.$store.runSaga(model.sagas)
    })
  },
  render (loaded, props) {
    const Component = loaded.Component.default
    return <Component {...props} />
  },
  loading: () => null
})
const routes = [
  { path: '/todo',
    component: Demo1Index,
    routes: [
      {
        path: '/todo/list',
        component: List
      },
      {
        path: '',
        component: TodoList
      }
    ]
  }
]

export default routes
