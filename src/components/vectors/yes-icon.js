import React from 'react';

function YesIcon(props) {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      clipRule="evenodd"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M10.2 15.336L3.696 3.168h4.296l4.56 9.168-1.032.072 4.488-9.24h4.296L13.68 15.336v5.496H10.2v-5.496z"
      />
    </svg>
  );
}

export { YesIcon };
