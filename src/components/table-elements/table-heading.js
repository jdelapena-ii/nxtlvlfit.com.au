import React from 'react';
import PropTypes from 'prop-types';

function TableHeading({ children }) {
  return (
    <th className="px-6 py-3 text-xs font-bold leading-4 tracking-widest text-center uppercase">
      {children}
    </th>
  );
}

TableHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TableHeading };
