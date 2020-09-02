import React from 'react';
import PropTypes from 'prop-types';

function TableCell({ children, colSpan, rowSpan }) {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className="px-6 py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap"
    >
      {children}
    </td>
  );
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
};

export { TableCell };
