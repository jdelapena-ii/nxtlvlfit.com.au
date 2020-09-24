/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Background } from './background';
import { Hero } from './hero';
import { NavBar } from './navbar';
import { Footer } from './footer';

function Layout({ children, isHome }) {
  return (
    <>
      <Helmet>
        {/* google conversion tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-591313295"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-591313295');`}
        </script>
      </Helmet>
      <div className="font-sans antialiased text-white bg-black fill-available">
        <div className="flex flex-col w-full min-h-screen mx-auto max-w-7xl">
          <div className="relative flex flex-col flex-1">
            <Background isHome={isHome} />
            {isHome ? <Hero /> : <NavBar />}
            <main className="relative flex flex-col flex-1">{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export { Layout };
