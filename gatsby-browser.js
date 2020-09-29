/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-josefin-sans';

import './src/css/tailwind.css';

// Wrap root element in StoreContextProvider and ParallaxProvider
function wrapRootElement({ element }) {
  return (
    <>
      <Helmet>
        {/* Google Tag Manager  */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6RPBV6');`}</script>

        {/* Google conversion tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-591313295"
        />
        <script>
          {`
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-591313295');
          `}
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
      {element}
    </>
  );
}

export { wrapRootElement };
