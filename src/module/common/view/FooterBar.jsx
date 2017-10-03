/**
 * Created by cc on 2017/6/30.
 */
import React, {Component} from 'react'
import { TabBar, Icon } from 'antd-mobile'
import routerUtils from '$assets/js/routerUtils'
import PropTypes from 'prop-types'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import MyIcon from '$components/Icon'
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
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={footerBar.get('hidden')}>
          <TabBar.Item title="列表" key="列表" badge={1} data-seed="logId"
            selected={footerBar.get('selectedTab') === '/'} onPress={() => { this.changeTab('/') }}
            icon={<MyIcon type={iconHome} size="md" />} selectedIcon={<MyIcon type={iconHome} size="md" />} />
          <TabBar.Item title="表单" key="表单" badge={'new'}
            onPress={() => { this.changeTab('/demo2') }} selected={footerBar.get('selectedTab') === '/demo2'}
            icon={<Icon type="search" size="md" />} selectedIcon={<Icon type="search" size="md" />} />
          <TabBar.Item title="朋友" key="朋友" dot selected={footerBar.get('selectedTab') === '/py'}
            icon={<Icon type="search" size="md" />} selectedIcon={<Icon type="search" size="md" />} />
          <TabBar.Item title="我的" key="我的" selected={footerBar.get('selectedTab') === '/wd'}
            icon={<Icon type="search" size="md" />} selectedIcon={<Icon type="search" size="md" />} />
        </TabBar>
      </div>
    )
  }
}
