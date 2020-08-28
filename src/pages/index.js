import React from 'react';

import {
  Layout,
  SEO,
  NavBar,
  ContactPageForm,
  TrueProtein,
  Instagram,
  Map,
} from '../components';
import {
  Welcome,
  ServicesGrid,
  MeetYourTeam,
  BlogPosts,
} from '../components/home';
import grunge from '../images/background-image-black.jpg';

function IndexPage() {
  return (
    <Layout isHome>
      <SEO title="Home" />
      <div className="relative pointer-events-none">
        <Spacer />
        <div
          style={{ backgroundImage: `url(${grunge})` }}
          className="bg-fixed pointer-events-auto"
        >
          <NavBar />
          <Welcome />
          <ServicesGrid />
          <MeetYourTeam />
          <BlogPosts />
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
