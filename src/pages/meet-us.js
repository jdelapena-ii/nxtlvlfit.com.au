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
import { useGraphQL } from '../hooks';

function MeetUsPage() {
  const { meetUsHeroImage } = useStaticQuery(
    graphql`
      {
        meetUsHeroImage: file(relativePath: { eq: "meet-us-hero-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
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
          <MattMoore />
          <AshPollard />
          <KateBlush />
        </div>
      </GradientContainer>
      <Instagram />
      <ContactPageForm />
      <Map />
    </Layout>
  );
}

function MattMoore() {
  const { hayleyKim } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Coach/Crossfit Trainer"
      heading="Matt Moore"
      image={hayleyKim.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TeamMember>
  );
}

function AshPollard() {
  const { svenMieke } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Personal/Crossfit Trainer"
      heading="Ash Pollard"
      image={svenMieke.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TeamMember>
  );
}

function KateBlush() {
  const { hayleyKim } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Power Lift Trainer"
      heading="Kate Blush"
      image={hayleyKim.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        architecto modi, ratione blanditiis quis facere nulla repudiandae, quia
        perspiciatis quae aspernatur iusto laudantium itaque nesciunt molestias,
        in vel doloribus earum!
      </p>
    </TeamMember>
  );
}

export default MeetUsPage;
