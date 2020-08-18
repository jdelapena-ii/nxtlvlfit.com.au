/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Background } from './background';
import { Hero } from './hero';
import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children, isHome }) {
  return (
    <div className="font-sans antialiased text-white bg-black">
      <Header />
      <Background isHome={isHome} />
      <div className="flex flex-col w-full min-h-screen mx-auto max-w-7xl">
        <Hero isHome={isHome} />
        <main className="relative flex flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};
