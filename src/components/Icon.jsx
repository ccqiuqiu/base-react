/**
 * Created by 熊超超 on 2017/9/30.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({type, className = '', size = 'md', ...restProps}) => (
  <svg className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}{...restProps} >
    <use xlinkHref={type} />
  </svg>
)
Icon.prototype.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string
}

export default Icon
