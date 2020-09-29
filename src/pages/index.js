import React from 'react';

import {
  Layout,
  SEO,
  NavBar,
  StartFreeTrial,
  TrueProtein,
  Instagram,
  ContactPageForm,
  Map,
} from '../components';
import {
  LevelUpYourFitness,
  ServicesGrid,
  MeetYourTeam,
} from '../components/home';
import grunge from '../images/background-image-black.jpg';
import { useGraphQL } from '../hooks';

function IndexPage() {
  const { site, deadlift } = useGraphQL();
  return (
    <Layout isHome>
      <SEO
        title={`Port Macquarie Gym | ${site.siteMetadata.title} | Local PMQ GYM`}
        useTitleTemplate={false}
        description="The latest Port Macquarie GYM nXtLvL is where you will meet your fitness goals, whilst keeping training diverse, challenging, and fun! All are welcome at nXtLvL Port Macquarie Gym. Sign up now!"
      />
      <div className="relative pointer-events-none">
        <Spacer />
        <div
          style={{ backgroundImage: `url(${grunge})` }}
          className="bg-fixed pointer-events-auto"
        >
          <NavBar />
          <LevelUpYourFitness />
          <ServicesGrid />
          <MeetYourTeam />
          <StartFreeTrial image={deadlift.childImageSharp.fluid} />
          <TrueProtein />
          <Instagram />
          <ContactPageForm />
          <Map />
        </div>
      </div>
    </Layout>
  );
}

function Spacer() {
  return (
    <div
      aria-hidden
      className="relative h-0 -mt-40 pointer-events-none aspect-ratio-16/9 bg-gradient-to-t from-black via-transparent"
    >
      <div aria-hidden className="absolute inset-0" />
    </div>
  );
}

export default IndexPage;
