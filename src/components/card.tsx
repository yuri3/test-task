import React, { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import './styles/card.scss';

type InfoItem = {
  id: string;
  name: string;
  count: string | number;
}

type Props = {
  hoverable: boolean;
  title: string;
  cover: ReactElement<any>;
  infoList: InfoItem[];
  actions: ReactElement<any>[];
  children?: ReactNode;
}

const Card = ({
  hoverable, title, cover, infoList, actions, children,
}: Props): ReactElement<any> => (
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
    {children}
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
);

Card.defaultProps = {
  hoverable: false,
  title: '',
  infoList: [],
};

Card.propTypes = {
  hoverable: PropTypes.bool,
  title: PropTypes.string,
  infoList: PropTypes.array,
  cover: PropTypes.element,
  actions: PropTypes.array,
  children: PropTypes.element,
};

export default Card;
