import React from 'react';

import { Layout, SEO } from '../components';
import { TextWithImage } from '../components/text-with-image';

export default function ServicesPage() {
  return (
    <Layout isHome>
      <SEO title="Services" />   
      <ServiceTypes />
    </Layout>
  );
}


function ServiceTypes() {
    return (
       <TextWithImage>
        <p>
            Omnicare proudly upholds its responsibilities as a not-for-profit
            organisation - focussing primarily on the communities we serve. We
            consider ourselves also as profit-for-purpose, reinvesting in programs
            and developing our staff to benefit those communities. Our operational
            priority is to deliver high-quality support that adds value.
        </p>
       </TextWithImage>
    )
}