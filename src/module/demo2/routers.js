import React from 'react'
import Loadable from 'react-loadable'
const Demo2 = Loadable({loader: () => import(/* webpackChunkName: "demo2" */ './view/Demo2'), loading: () => null})
// 异步加载模块
const Demo2Index = Loadable.Map({
  loader: {
    Component: () => import(/* webpackChunkName: "demo2" */ './view'),
    model: () => import(/* webpackChunkName: "demo2" */ './index').then(model => {
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
  { path: '/demo2',
    component: Demo2Index,
    routes: [
      {
        path: '',
        exact: true,
        component: Demo2
      }
    ]
  }
]

export default routes
