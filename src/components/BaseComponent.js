/**
 * Created by cc on 2017/7/31.
 */
import React, {Component} from 'react'
import { actions } from '../module/common/model/common'

// immutable的pure
export { immutableRenderDecorator } from 'react-immutable-render-mixin'

// 修改头部和底部的装饰器
export const changeHeaderAndFooter = (header, footer) => (WrappedComponent) => {
  return class extends Component {
    componentDidMount () {
      // 修改头部
      if (header) {
        if (typeof header === 'string') {
          header = {title: header}
        }
        window.$store.dispatch(actions.changeHeader(header))
      }
      // 修改底部
      if (footer) {
        if (typeof footer === 'string') {
          footer = {selectedTab: footer}
        }
        window.$store.dispatch(actions.changeFooterBar(footer))
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}
