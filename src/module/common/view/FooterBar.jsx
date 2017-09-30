/**
 * Created by cc on 2017/6/30.
 */
import React, {Component} from 'react'
import { TabBar } from 'antd-mobile'
import routerUtils from '$assets/js/routerUtils'
import PropTypes from 'prop-types'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import iconHome from '$img/home.svg'

@immutableRenderDecorator
export default class FooterBar extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  changeTab = name => {
    routerUtils.push(name)
  }
  render () {
    const footerBar = this.props.data
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={footerBar.get('hidden')}>
        <TabBar.Item title="列表" key="列表" badge={1} data-seed="logId"
          selected={footerBar.get('selectedTab') === '/'} onPress={() => { this.changeTab('/') }}
          icon={<CustomIcon type={iconHome} size="md" />} selectedIcon={<CustomIcon type={iconHome} size="md" />} />
        <TabBar.Item title="表单" key="表单" badge={'new'}
          onPress={() => { this.changeTab('/demo2') }} selected={footerBar.get('selectedTab') === '/demo2'}
          icon={<CustomIcon type={iconHome} size="md" />} selectedIcon={<CustomIcon type={iconHome} size="md" />} />
        <TabBar.Item title="朋友" key="朋友" dot selected={footerBar.get('selectedTab') === '/py'}
          icon={<CustomIcon type={iconHome} size="md" />} selectedIcon={<CustomIcon type={iconHome} size="md" />} />
        <TabBar.Item title="我的" key="我的" selected={footerBar.get('selectedTab') === '/wd'}
          icon={<CustomIcon type={iconHome} size="md" />} selectedIcon={<CustomIcon type={iconHome} size="md" />} />
      </TabBar>
    )
  }
}
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg
    className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
    {...restProps}>
    <use xlinkHref={type} />
  </svg>
)
CustomIcon.prototype.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string
}
