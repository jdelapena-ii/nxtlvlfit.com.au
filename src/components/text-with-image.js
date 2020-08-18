import React from 'react';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { SideBySide } from './side-by-side';

function TextWithImage({ children, cta, heading, image, reverse }) {
  function Image() {
    return (
      <div className="relative order-1 w-full md:order-none">
        <GatsbyImage fluid={image} className="w-full h-full" />
      </div>
    );
  }

  return (
    <SideBySide
      component={<Image />}
      heading={heading}
      cta={cta}
      reverse={reverse}
    >
      {children}
    </SideBySide>
  );
}

TextWithImage.propTypes = {
  children: PropTypes.node.isRequired,
  cta: PropTypes.node,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export { TextWithImage };
