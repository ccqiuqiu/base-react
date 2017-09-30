import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import './assets/css/base.less'
import 'flex.css/dist/data-flex.css'
import Header from './module/common/view/Header'
import FooterBar from './module/common/view/FooterBar'
import routes from './router/rootRoutes'
import {connect} from 'react-redux'
import RouteWithSubRoutes from './router/RouteWithSubRoutes'
import {immutableRenderDecorator} from '$components/BaseComponent'
import { actions } from './module/common/model/common'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

// const App = () => (
//   <div className='App' data-flex="dir:top box:justify">
//     <Header />
//     <HashRouter>
//       <div className="content" data-flex-box="1">
//         <Switch>
//           {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
//         </Switch>
//       </div>
//     </HashRouter>
//     <FooterBar />
//   </div>
// )
@immutableRenderDecorator
class App extends React.Component {
  static propTypes = {
    header: PropTypes.object,
    footerBar: PropTypes.object
  }
  render () {
    return <div className='App' data-flex="dir:top box:justify">
      <Header data={this.props.header} />
      <HashRouter>
        <div className="content" data-flex-box="1">
          <Switch>
            {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
          </Switch>
        </div>
      </HashRouter>
      <FooterBar data={this.props.footerBar} />
    </div>
  }
}

const mapStateToProps = state => ({
  header: state.getIn(['CommonModel', 'header']),
  footerBar: state.getIn(['CommonModel', 'footerBar'])
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
