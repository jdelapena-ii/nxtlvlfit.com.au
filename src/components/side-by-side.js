import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function SideBySide({ heading, children, cta, component, reverse }) {
  function Copy() {
    return (
      <div className="flex flex-col justify-center max-w-lg space-y-8">
        <h2>{heading}</h2>
        <div key={nanoid()} className="prose">
          {children}
        </div>
        {cta && (
          <div className="flex flex-wrap items-center -mt-4" key={nanoid()}>
            {cta}
          </div>
        )}
      </div>
    );
  }
  function SecondaryComponent() {
    return <div className="order-last md:order-none">{component}</div>;
  }
  return (
    <article className="relative grid gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
      {reverse && <SecondaryComponent />}
      <Copy key={nanoid()} />
      {!reverse && <SecondaryComponent />}
    </article>
  );
}

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  cta: PropTypes.node,
  component: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export { SideBySide };
