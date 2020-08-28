import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ children }) {
  return <tr className="divide-x-2 divide-white">{children}</tr>;
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TableRow };
