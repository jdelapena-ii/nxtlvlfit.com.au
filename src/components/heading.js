import React from 'react';
import PropTypes from 'prop-types';

function Heading({ children, eyebrowText, reverse, tag = 'h2' }) {
  const Tag = tag;
  const EyebrowText = () => (
    <>
      {reverse && <br />}
      <span className="leading-normal">{eyebrowText}</span>
      {!reverse && <br />}
    </>
  );
  return (
    <Tag className="relative font-bold leading-none tracking-widest text-center uppercase sm:text-xl">
      {eyebrowText && !reverse && <EyebrowText />}
      <span className="text-4xl sm:text-5xl">{children}</span>
      {eyebrowText && reverse && <EyebrowText />}
    </Tag>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  eyebrowText: PropTypes.string,
  reverse: PropTypes.bool,
  tag: PropTypes.string,
};

export { Heading };
