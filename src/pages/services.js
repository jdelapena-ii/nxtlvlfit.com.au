import React from 'react';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  Heading,
  TeamMember,
  TrueProtein,
  Instagram,
  ContactPageForm,
  Map,
} from '../components';
import { useGraphQL } from '../hooks';

function ServicesPage() {
  const { marcosPaulo } = useGraphQL();
  return (
    <Layout>
      <SEO title="Services" />
      <PageHero
        heading="nXtLvL Services"
        image={marcosPaulo.childImageSharp.fluid}
      />
      <GradientContainer>
        <div className="px-4 py-24 sm:px-6 lg:px-8">
          <Heading eyebrowText="Get ready to get">Energised!</Heading>
          <div className="relative grid max-w-5xl py-12 mx-auto mt-12 border-2 border-white gap-y-24">
            <FunctionalFitness />
            <Calisthenics />
            <PowerLifting />
            <SportsMassage />
            <InfraredSauna />
            <MobilityLounge />
          </div>
        </div>
      </GradientContainer>
      <TrueProtein />
      <Instagram />
      <ContactPageForm />
      <Map />
    </Layout>
  );
}

function FunctionalFitness() {
  const { svenMieke } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Smash your goals with"
      heading="Functional Fitness"
      ctaLink="/services/functional-fitness/"
      ctaLabel="Read more"
      image={svenMieke.childImageSharp.fluid}
      reverse
    >
      <p>
        nXtLvL offers a boutique industrial-inspired functional fitness training
        area with state-of-the-art equipment, resistance training, and
        functional training spaces that allow you learn new techniques,
        challenge yourself, and reach all your training goals.
      </p>
    </TeamMember>
  );
}

function Calisthenics() {
  const { calisthenics } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Discover fluid movement with"
      heading="Calisthenics"
      ctaLink="/services/calisthenics/"
      ctaLabel="Read more"
      image={calisthenics.childImageSharp.fluid}
    >
      <p>
        nXtLvL Functional Movement Centre is proud home to one of the region’s
        premier calisthenics training facilities.
      </p>
    </TeamMember>
  );
}

function PowerLifting() {
  const { olympicAndPowerLifting } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Get those gains with"
      heading="Olympic Lifting and Power Lifting"
      ctaLink="/services/olympic-lifting–and–power-lifting/"
      ctaLabel="Read more"
      image={olympicAndPowerLifting.childImageSharp.fluid}
      reverse
    >
      <p>
        Lift heavy with proper technique at nXtLvL Functional Movement Centre’s
        dedicated Olympic and Power lifting area, using all the latest
        weightlifting, powerlifting, and plyometrics equipment.
      </p>
    </TeamMember>
  );
}

function SportsMassage() {
  const { sportsMassage } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Recover quicker with"
      heading="Sports Massage"
      ctaLink="/services/sports-massage/"
      ctaLabel="Read more"
      image={sportsMassage.childImageSharp.fluid}
      objectPosition="right"
    >
      <p>
        As part of our Functional Movement Centre, we understand how vital
        recovery is to maintaining fitness and function. nXtLvL offers in-house
        sports massage from qualified massage therapists to help you achieve
        more in the gym and in everyday life.
      </p>
    </TeamMember>
  );
}

function InfraredSauna() {
  const { infraredSauna } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Sweat it out in our"
      heading="Infrared Sauna"
      ctaLink="/services/infrared-sauna/"
      ctaLabel="Read more"
      image={infraredSauna.childImageSharp.fluid}
      reverse
    >
      <p>
        Our innovative infrared sauna is part of our recovery centre, helping
        your muscles recover from high intensity workout, improve circulation,
        and aid in relaxation.
      </p>
    </TeamMember>
  );
}

function MobilityLounge() {
  const { sportsMassage } = useGraphQL();
  return (
    <TeamMember
      heading="Mobility Lounge"
      ctaLink="/services/mobility-lounge/"
      ctaLabel="Read more"
      image={sportsMassage.childImageSharp.fluid}
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

export default ServicesPage;
