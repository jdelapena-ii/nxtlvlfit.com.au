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
        {/* Google tag manager  */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6RPBV6');`}</script>

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
      <noscript>
        <iframe
          title="gtm"
          src="https://www.googletagmanager.com/ns.html?id=GTM-P6RPBV6"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

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
