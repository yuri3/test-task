import React from 'react'
import PropTypes from 'prop-types'
import './styles/list.scss'

const List = ({ list }) => (
  <div className="list">
    {
      list.map(({ id, name, count }) => (
        <div key={id} className="list-item">
          <div>{name}</div>
          <div>{count}</div>
        </div>
      ))
    }
  </div>
)

List.defaultProps = {
  list: [],
}

List.propTypes = {
  list: PropTypes.array,
}

export default List
