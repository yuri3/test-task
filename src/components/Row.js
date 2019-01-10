import React from 'react'
import PropTypes from 'prop-types'
import './styles/row.scss'

const Row = ({ style, gutter, children }) => {
  let rowStyle = { ...style }
  
  if (gutter) {
    rowStyle = {
      ...rowStyle,
      marginLeft: `-${gutter / 2}px`,
      marginRight: `-${gutter / 2}px`,
    }
  }

  return (
    <div className="row" style={rowStyle}>{children}</div>
  )
}

Row.defaultProps = {
  style: {},
  gutter: 0,
}

Row.propTypes = {
  style: PropTypes.object,
  gutter: PropTypes.oneOf([8, 16, 24]),
  children: PropTypes.array,
}

export default Row
