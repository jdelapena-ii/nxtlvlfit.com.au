import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ children }) {
  return <tbody className="divide-y divide-white">{children}</tbody>;
}

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TableBody };
