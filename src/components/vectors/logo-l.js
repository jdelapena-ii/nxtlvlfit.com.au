import PropTypes from 'prop-types';
import React from 'react';

function LogoL(props) {
  return (
    <svg
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      clipRule="evenodd"
      viewBox="0 0 1419 425"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M804.16 280.29h88.51v22.57H780.4V100h23.76v180.29z"
      />
    </svg>
  );
}

LogoL.propTypes = {
  className: PropTypes.string,
};

export { LogoL };
