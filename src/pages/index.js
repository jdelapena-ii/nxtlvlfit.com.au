import React from 'react';

import { Layout, SEO, Background, NavBar, Hero } from '../components';
import { Welcome, ServicesGrid } from '../components/home';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <MainSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <div className="absolute inset-0">
      <Background isHome />
      <Hero />
    </div>
  );
}

function MainSection() {
  return (
    <div className="relative mt-12 pointer-events-none">
      <Spacer />
      <div className="pointer-events-auto">
        <NavBar />
        <Welcome />
        <ServicesGrid />
      </div>
    </div>
  );
}

function Spacer() {
  return (
    <div
      aria-hidden
      className="relative h-0 pointer-events-none aspect-ratio-16/9"
    >
      <div aria-hidden className="absolute inset-0" />
    </div>
  );
}

export default IndexPage;
