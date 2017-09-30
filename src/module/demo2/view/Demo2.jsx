/**
 * Created by cc on 2017/7/31.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {immutableRenderDecorator, changeHeaderAndFooter} from '$components/BaseComponent'
import { List, InputItem, Button, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'
import './res/demo2.less'
import { bindActionCreators } from 'redux'
import { actions } from '../model/demo2'
import md5 from '$assets/js/md5'

// 登录表单
class LoginForm extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    onSubmit: PropTypes.func
  }
  submit = () => {
    this.props.form.validateFields((error, values) => {
      if (error) {
        // 此处根据需要处理表单验证结果
        Toast.fail(JSON.stringify(error))
        return
      }
      values.passWord = md5(values.passWord)
      this.props.onSubmit(values)
    })
  }
  render () {
    const { getFieldProps } = this.props.form
    return (
      <div className="demo2">
        <List renderHeader={() => '登录表单'}>
          <InputItem
            {...getFieldProps('userName', {
              validateFirst: true,
              rules: [{required: true, message: '用户名不能为空'}, {type: 'string', message: '用户名格式错误'}]
            })}
            type="money" clear placeholder="请输入手机号" autoFocus>手机号</InputItem>
          <InputItem
            {...getFieldProps('passWord', {
              validateFirst: true,
              rules: [{required: true, message: '密码不能为空'}]
            })}
            type="password" placeholder="请输入登录密码" clear maxLength={10} >密码</InputItem>
        </List>
        <Button className="btn" type="primary" onClick={this.submit}>登录</Button>
      </div>
    )
  }
}

const LoginFormWrapper = createForm()(LoginForm)

@immutableRenderDecorator
@changeHeaderAndFooter('表单', '/demo2')
class Demo2 extends Component {
  static propTypes = {
    actions: PropTypes.object
  }
  login = user => {
    this.props.actions.login(user, () => {
      Toast.success('登录成功')
    })
  }
  render () {
    return (
      <LoginFormWrapper onSubmit={this.login} />
    )
  }
}

const mapStateToProps = state => ({
  // appBar: state.getIn(['Demo2Model', 'appBar'])
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo2)
