import React, { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import './styles/row.scss';

type Props = {
  style: object;
  gutter: number;
  children: ReactNode;
}

type Style = {
  marginLeft?: string | number;
  marginRight?: string | number;
}

const Row = ({ style, gutter, children }: Props): ReactElement<any> => {
  let rowStyle: Style = { ...style };

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
};

Row.defaultProps = {
  style: {},
  gutter: 0,
};

Row.propTypes = {
  style: PropTypes.object,
  gutter: PropTypes.oneOf([8, 16, 24]),
  children: PropTypes.array,
};

export default Row;
