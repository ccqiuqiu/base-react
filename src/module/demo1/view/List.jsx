/**
 * Created by cc on 2017/8/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class List extends Component {
  static propTypes = {}

  render () {
    return (
      <div className="List">null</div>
    )
  }
}

const mapStateToProps = state => ({
  // appBar: state.getIn(['appBarModel', 'appBar']).toJS()
})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
