import React from 'react';

import GatsbyImage from 'gatsby-image';
import { Layout, SEO, ContactPageForm, TeamMember } from '../components';
import { Map } from '../components/map';
import { Instagram } from '../components/home';

import { useGraphQL } from '../hooks';

function MeetUsPage() {
  const { kateBlush, svenMieke, hayleyKim } = useGraphQL();

  return (
    <Layout>
      <SEO title="Coming soon" />
      <div className="relative">
        <GatsbyImage
          style={{ maxHeight: '40rem' }}
          fluid={kateBlush.childImageSharp.fluid}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold leading-none tracking-widest text-center uppercase text-shadow md:text-6xl">
            Meet Us
          </h2>
        </div>
      </div>
      <div className="mt-12 relative px-4 py-12 sm:px-6 lg:px-8">
        <h2
          style={{ letterSpacing: '0.7rem' }}
          className="text-2xl font-bold leading-none text-center uppercase"
        >
          Come in and meet the
        </h2>
        <h3
          style={{ letterSpacing: '0.7rem' }}
          className="mt-4 text-6xl font-bold leading-none text-center uppercase"
        >
          NXTLVL Team
        </h3>
        <div className="mx-auto mt-6 tracking-widest prose text-white text-shadow text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            veniam aliquid. Doloremque culpa assumenda voluptatem tempore optio!
            Laudantium et assumenda, officia quas voluptatum incidunt dolores
            aliquam quasi eligendi beatae.
          </p>
          <p>
            Eius sequi facilis cum, dolore incidunt odit similique saepe quis
            tempora, dolorem quae, facere autem ut cupiditate. Dicta placeat
            officiis labore animi! Ut architecto quas distinctio dolore
            inventore tempora. Harum.
          </p>
        </div>
      </div>
      <TeamMember
        jobTitle="Coach/Crossfit Trainer"
        fullName="Matt Moore"
        image={hayleyKim.childImageSharp.fluid}
        reverse
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
      </TeamMember>
      <TeamMember
        jobTitle="Personal/Crossfit Trainer"
        fullName="Ash Pollard"
        image={hayleyKim.childImageSharp.fluid}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
      </TeamMember>
      <TeamMember
        jobTitle="Power Lift Trainer"
        fullName="Kate Blush"
        image={kateBlush.childImageSharp.fluid}
        reverse
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          architecto modi, ratione blanditiis quis facere nulla repudiandae,
          quia perspiciatis quae aspernatur iusto laudantium itaque nesciunt
          molestias, in vel doloribus earum!
        </p>
      </TeamMember>
      <Instagram />
      <ContactPageForm />
      <Map />
    </Layout>
  );
}

export default MeetUsPage;
