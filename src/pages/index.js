import React from 'react';

import { Layout, SEO, NavBar } from '../components';
import {
  Welcome,
  ServicesGrid,
  MeetTheTeam,
  BlogPosts,
  TrueProtein,
  Instagram,
} from '../components/home';

function IndexPage() {
  return (
    <Layout isHome>
      <SEO title="Home" />
      <div className="relative pointer-events-none">
        <Spacer />
        <div className="pointer-events-auto">
          <NavBar />
          <Welcome />
          <ServicesGrid />
          <MeetTheTeam />
          <BlogPosts />
          <TrueProtein />
          <Instagram />
        </div>
      </div>
    </Layout>
  );
}

function Spacer() {
  return (
    <div
      aria-hidden
      className="relative h-0 pt-12 pointer-events-none aspect-ratio-16/9 bg-gradient-to-t from-black via-transparent"
    >
      <div aria-hidden className="absolute inset-0" />
    </div>
  );
}

export default IndexPage;
