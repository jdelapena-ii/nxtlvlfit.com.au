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
import { NavBar } from './navbar';
import { Footer } from './footer';

function Layout({ children, isHome }) {
  return (
    <div className="font-sans antialiased text-white bg-black fill-available">
      <div className="flex flex-col w-full min-h-screen mx-auto max-w-7xl">
        <div className="relative flex flex-col flex-1">
          <Background isHome={isHome} />
          {isHome ? <Hero /> : <NavBar />}
          <main className="relative flex flex-col justify-end flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export { Layout };
