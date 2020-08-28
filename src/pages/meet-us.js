/* eslint-disable no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  Intro,
  TeamMember,
  Instagram,
  ContactPageForm,
  Map,
} from '../components';

function MeetUsPage() {
  const { meetUsHeroImage } = useImages();
  return (
    <Layout>
      <SEO title="Meet the nXtLvL Team" />
      <PageHero
        heading="Meet Us"
        image={meetUsHeroImage.childImageSharp.fluid}
      />
      <GradientContainer>
        <div className="relative grid pb-24 gap-y-24">
          <Intro eyebrowText="Come in and meet the" heading="nTxLvL Team">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
              veniam aliquid. Doloremque culpa assumenda voluptatem tempore
              optio! Laudantium et assumenda, officia quas voluptatum incidunt
              dolores aliquam quasi eligendi beatae.
            </p>
            <p>
              Eius sequi facilis cum, dolore incidunt odit similique saepe quis
              tempora, dolorem quae, facere autem ut cupiditate. Dicta placeat
              officiis labore animi! Ut architecto quas distinctio dolore
              inventore tempora. Harum.
            </p>
          </Intro>
          <Jodie />
          <Nige />
          <Harry />
          <Rich />
          <Kez />
        </div>
      </GradientContainer>
      <Instagram />
      <ContactPageForm />
      <Map />
    </Layout>
  );
}

function Jodie() {
  const { jodieLea } = useImages();
  return (
    <TeamMember
      // eyebrowText="Coach/Crossfit Trainer"
      heading="Jodie"
      image={jodieLea.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <ul>
        <li>AWF 1 &amp; 2 Lifting</li>
        <li>CrossFit Level 1 &amp; 2</li>
        <li>Functional Fitness</li>
        <li>Rowing</li>
      </ul>
    </TeamMember>
  );
}

function Nige() {
  const { nige } = useImages();
  return (
    <TeamMember
      // eyebrowText="Personal/Crossfit Trainer"
      heading="Nige"
      image={nige.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
    >
      <ul>
        <li>Functional Fitness</li>
        <li>CrossFit Level 1</li>
        <li>Power Lifting</li>
        <li>Technique &amp; Corrective Exercises</li>
      </ul>
    </TeamMember>
  );
}

function Harry() {
  const { harry } = useImages();
  return (
    <TeamMember
      // eyebrowText="Power Lift Trainer"
      heading="Harry"
      image={harry.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <ul>
        <li>Calisthenics</li>
      </ul>
    </TeamMember>
  );
}

function Rich() {
  const { rich } = useImages();
  return (
    <TeamMember
      // eyebrowText="Power Lift Trainer"
      heading="Rich"
      image={rich.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
    >
      <ul>
        <li>Functional Fitness</li>
        <li>AWF Level 1</li>
        <li>CrossFit Level 1</li>
      </ul>
    </TeamMember>
  );
}

function Kez() {
  const { kez } = useImages();
  return (
    <TeamMember
      // eyebrowText="Power Lift Trainer"
      heading="Kez"
      image={kez.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <ul>
        <li>Functional Fitness</li>
        <li>AWF Level 1</li>
        <li>CrossFit Level 1</li>
      </ul>
    </TeamMember>
  );
}

export function useImages() {
  const data = useStaticQuery(
    graphql`
      {
        harry: file(relativePath: { eq: "harry.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jodieLea: file(relativePath: { eq: "jodie-lea.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kez: file(relativePath: { eq: "kez.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meetUsHeroImage: file(relativePath: { eq: "meet-us-hero-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nige: file(relativePath: { eq: "nige.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rich: file(relativePath: { eq: "rich.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
}

export default MeetUsPage;
