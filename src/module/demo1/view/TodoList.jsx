/**
 * Created by cc on 2017/7/27.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Card, Modal } from 'antd-mobile'
import { bindActionCreators } from 'redux'
import { actions } from '../model/todo'
import {immutableRenderDecorator, changeHeaderAndFooter} from '$components/BaseComponent'

@immutableRenderDecorator
@changeHeaderAndFooter('列表', '/')
class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.object,
    actions: PropTypes.object
  }
  componentWillMount () {
    this.props.actions.getTodoList()
  }
  clickItem = (i, todo) => () => {
    this.props.actions.updateTodo(i, {id: i, title: todo.get('title'), content: todo.get('content') + 1})
  }
  delItem = (i) => (e) => {
    Modal.alert('删除', '您确定要删除吗？', [
      { text: '取消', onPress: () => null },
      { text: '确定', onPress: () => this.props.actions.delTodo(i) }
    ])
    e.stopPropagation()
  }
  render () {
    return (
      <div className="TodoList">
        {this.props.todos.map((todo, i) => <TodoItem key={i} todo={todo} i={i} clickItem={this.clickItem} delItem={this.delItem} />)}
      </div>
    )
  }
}

/* 单条todo */
@immutableRenderDecorator
class TodoItem extends Component {
  render () {
    const {todo, i, clickItem, delItem} = {...this.props}
    return (
      <Card onClick={clickItem(i, todo)} >
        <Card.Header title={todo.get('title')} />
        <Card.Body>
          <div>{todo.get('content')}</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div onClick={delItem(i)}>删除</div>} />
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.getIn(['TodoModel', 'todos'])
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
