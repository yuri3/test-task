import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import './styles/card.scss'

const Card = ({
  hoverable, title, cover, infoList, actions, 
}) => (
  <div className={`card ${hoverable ? 'card-hoverable' : ''}`}>
    <div className="card-title">{title}</div>
    {
      cover && (
        <div className="card-img">
          {cover}
          <div className="card-info-list">
            <List list={infoList} />
          </div>
        </div>
      )
    }
    {
      actions && (
        <div className="card-actions">
          {
            actions.map((action, i) => (
              <div key={i} className="card-action">{action}</div>
            ))
          }
        </div>
      )
    }
  </div>
)

Card.defaultProps = {
  hoverable: false,
  title: '',
  infoList: [],
}

Card.propTypes = {
  hoverable: PropTypes.bool,
  title: PropTypes.string,
  infoList: PropTypes.array,
  cover: PropTypes.element,
  actions: PropTypes.array,
}

export default Card
