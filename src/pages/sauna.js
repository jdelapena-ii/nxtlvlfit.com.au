import React from 'react';
import GatsbyImage from 'gatsby-image';

import { Link } from 'gatsby';
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

function SaunaPage() {
  const {
    infraredSauna,
    marcosPaulo,
    sportsMassage,
    brigitteTohm,
  } = useGraphQL();
  return (
    <Layout>
      <SEO title="Sauna" />
      <PageHero
        heading="Infrared Sauna"
        image={infraredSauna.childImageSharp.fluid}
      />
      <GradientContainer>
        <div className="grid pb-24 gap-y-24">
          <Intro eyebrowText="Sweat it out in our" heading="Infrared Sauna">
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
          <TeamMember
            image={infraredSauna.childImageSharp.fluid}
            aspectRatio="aspect-ratio-3/4"
            reverse
          >
            <h2>How it works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus voluptates sint unde impedit laudantium corporis
              suscipit quaerat, laboriosam amet officiis rerum, excepturi ut
              fugit voluptatum quia quas eos, minima iste.
            </p>
            <h2>Benefits</h2>
            <p>
              Voluptatum harum error accusantium ab ipsam incidunt, obcaecati
              esse cupiditate nulla! Sunt deserunt itaque sed quisquam ut magni
              veritatis enim qui aperiam, possimus reprehenderit architecto esse
              doloremque sapiente? Quas, expedita?
            </p>
            <p>
              Accusantium eligendi beatae a. Totam ratione nemo ad repellat,
              inventore reprehenderit quasi labore aut dolore atque nobis sint
              facilis nulla maiores neque, cum dolorum consectetur error, veniam
              quisquam rem. Fuga!
            </p>
          </TeamMember>
          <article className="grid grid-cols-2 px-4 lg:grid-cols-4 sm:px-6 lg:px-8">
            <div className="relative h-0 aspect-ratio-square">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  fluid={infraredSauna.childImageSharp.fluid}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="relative h-0 aspect-ratio-square">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  fluid={infraredSauna.childImageSharp.fluid}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="relative h-0 aspect-ratio-square">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  fluid={brigitteTohm.childImageSharp.fluid}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="relative h-0 aspect-ratio-square">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  fluid={sportsMassage.childImageSharp.fluid}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="relative h-0 aspect-ratio-square">
              <div className="absolute inset-0 flex">
                <GatsbyImage
                  fluid={sportsMassage.childImageSharp.fluid}
                  className="flex-1"
                />
              </div>
            </div>
          </article>
        </div>
        <article className="relative">
          <div className="relative h-0 aspect-ratio-21/9">
            <div className="absolute inset-0 flex">
              <GatsbyImage
                fluid={marcosPaulo.childImageSharp.fluid}
                className="flex-1"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"
            />
            <div className="relative px-4 space-y-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white uppercase text-shadow">
                Need more convincing?
              </h2>
              <Link
                to="/membership/"
                className="inline-block w-full max-w-xs px-8 py-4 font-bold tracking-widest text-center text-black uppercase bg-white"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </article>
        <Instagram />
        <ContactPageForm />
        <Map />
      </GradientContainer>
    </Layout>
  );
}

export default SaunaPage;
