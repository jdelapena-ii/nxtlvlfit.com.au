import React from 'react';

import {
  Layout,
  SEO,
  ContactPageForm,
  PageHero,
  GradientContainer,
  TeamMember,
} from '../components';
import { Map } from '../components/map';
import { Instagram } from '../components/home';

import { useGraphQL } from '../hooks';

function MeetUsPage() {
  const { kateBlush } = useGraphQL();
  return (
    <Layout>
      <SEO title="Meet the nXtLvL Team" />
      <PageHero heading="Meet Us" image={kateBlush.childImageSharp.fluid} />
      <GradientContainer>
        <div className="relative grid pb-24 gap-y-24">
          <Intro />
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

function Intro() {
  return (
    <div className="relative px-4 py-12 mt-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold leading-none text-center uppercase tracking-insane">
        <span>Come in and meet the</span>
        <br />
        <span className="mt-4 text-6xl font-bold leading-none text-center uppercase">
          nXtLvL Team
        </span>
      </h2>
      <div className="mx-auto mt-6 tracking-widest prose text-center text-white text-shadow">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
          veniam aliquid. Doloremque culpa assumenda voluptatem tempore optio!
          Laudantium et assumenda, officia quas voluptatum incidunt dolores
          aliquam quasi eligendi beatae.
        </p>
        <p>
          Eius sequi facilis cum, dolore incidunt odit similique saepe quis
          tempora, dolorem quae, facere autem ut cupiditate. Dicta placeat
          officiis labore animi! Ut architecto quas distinctio dolore inventore
          tempora. Harum.
        </p>
      </div>
    </div>
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
