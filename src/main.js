import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
// import initReactFastclick from 'react-fastclick'
// initReactFastclick()

// 开发环境增加一些性能调试工具
if (process.env.NODE_ENV === 'development') {
  // why-did-you-update
  // // eslint-disable-next-line no-unused-vars
  // let createClass = React.createClass
  // // eslint-disable-next-line accessor-pairs
  // Object.defineProperty(React, 'createClass', {
  //   set: (nextCreateClass) => {
  //     createClass = nextCreateClass
  //   }
  // })
  // const { whyDidYouUpdate } = require('why-did-you-update')
  // whyDidYouUpdate(React)
  // Chrome 插件React Perf
  window.Perf = require('react-addons-perf')
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
