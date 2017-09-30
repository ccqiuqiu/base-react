import React from 'react'
import PropTypes from 'prop-types'
import RouteWithSubRoutes from '../../../router/RouteWithSubRoutes'

const Demo2 = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)

Demo2.prototype.propTypes = {
  routes: PropTypes.array
}

export default Demo2
