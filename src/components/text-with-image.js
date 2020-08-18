import PropTypes from 'prop-types';
import React from 'react';
import GatsbyImage from 'gatsby-image';
import { nanoid } from 'nanoid';

import { AttentionBar } from './attention-bar';
import { SideBySide } from './side-by-side';

function TextWithImage({
  children,
  cta,
  heading,
  image,
  paddingTop,
  reverse,
  showAttentionBar,
}) {
  // function Image() {
  //   return (
  //     <div className="relative order-1 w-full md:order-none">
  //       <GatsbyImage fluid={image} className="w-full h-full rounded-xl" />
  //       {showAttentionBar && <AttentionBar />}
  //     </div>
  //   );
  // }

  return (
    <SideBySide
      heading={heading}
      cta={cta}
      // component={<Image key={nanoid()} />}
      paddingTop={paddingTop}
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
  paddingTop: PropTypes.string,
  reverse: PropTypes.bool,
  showAttentionBar: PropTypes.bool,
};

export { TextWithImage };
