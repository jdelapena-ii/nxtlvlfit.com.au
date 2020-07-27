import React from 'react';

function NoIcon(props) {
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
        d="M19.86 21.54L6.468 9.444l1.032.576.072 10.8H4.044V2.46h.144l13.104 12.048-.768-.336-.072-11.016h3.504V21.54h-.096z"
      />
    </svg>
  );
}

export { NoIcon };
