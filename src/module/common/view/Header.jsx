/**
 * Created by cc on 2017/6/30.
 */
import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import PropTypes from 'prop-types'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar'
import routerUtils from '$assets/js/routerUtils'

@immutableRenderDecorator
export default class Header extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  search = () => {}
  render () {
    return (
      <div className="Header">
        <NavBar mode="light" onLeftClick={() => routerUtils.back()}
          rightContent={[
            <Icon key="0" type="search" style={{marginRight: '0.32rem'}} onClick={this.search} />,
            <Icon key="1" type="ellipsis" />]}>
          {this.props.data.get('title')}
        </NavBar>
        <LoadingBar showFastActions className="loading" />
      </div>
    )
  }
}
