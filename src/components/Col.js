import React from 'react'
import PropTypes from 'prop-types'
import './styles/col.scss'

const Col = ({ style, children, xl, lg, md, sm, xs }) => {
  let className = ''

  if (xl || lg || md || sm || xs) {
    className = `col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-xs-${xs}`
  }

  return (
    <div className={className} style={style}>{children}</div>
  )
}

Col.defaultProps = {
  style: {},
  xl: 0,
  lg: 0,
  md: 0,
  sm: 0,
  xs: 0,
}

Col.propTypes = {
  style: PropTypes.object,
  xl: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  children: PropTypes.element,
}

export default Col
