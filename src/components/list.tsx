import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import './styles/list.scss';

type InfoItem = Card['props']['infoList'];

type Props = {
  list: InfoItem[];
}

const List = ({ list }: Props): React.ReactElement<any> => (
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
);

List.defaultProps = {
  list: [],
};

List.propTypes = {
  list: PropTypes.array,
};

export default List;
