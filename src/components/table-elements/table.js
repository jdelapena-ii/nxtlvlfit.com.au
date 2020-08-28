import React from 'react';
import PropTypes from 'prop-types';

function Table({ children }) {
  return (
    <table className="min-w-full bg-black divide-y-2 divide-white">
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Table };
