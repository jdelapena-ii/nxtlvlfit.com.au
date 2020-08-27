import React from 'react';

import {
  Layout,
  SEO,
  PageHero,
  TeamMember,
  GradientContainer,
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
        <div className="relative grid max-w-5xl py-12 mx-auto mt-12 border-2 border-white gap-y-24">
          <FunctionalFitness />
          <Calisthenics />
          <PowerLifting />
          <OlympicLifting />
          <SportsMassage />
          <InfraredSauna />
          <MobilityLounge />
        </div>
      </GradientContainer>
    </Layout>
  );
}

function FunctionalFitness() {
  const { svenMieke } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Smash your goals with"
      heading="Functional Fitness"
      image={svenMieke.childImageSharp.fluid}
      reverse
    >
      <p>
        NXTLVL offers a boutique industrial-inspired functional fitness training
        area with state-of-the-art equipment, resistance training, and
        functional training spaces that allow you learn new techniques,
        challenge yourself, and reach all your training goals.
      </p>
      <p>
        Our functional fitness zone encourages friendly competition, diverse
        workout styles, and fun. Every day is a new challenge, as our
        experienced trainers set Workouts of the Day that’ll get your heart
        pumping.
      </p>
      <p>
        Our custom designed rigs are ideal for people looking to improve their
        fitness, hit their PRs or compete at the highest levels.{' '}
      </p>
    </TeamMember>
  );
}

function Calisthenics() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Calisthenics"
      image={marcosPaulo.childImageSharp.fluid}
      objectPosition="right"
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

function PowerLifting() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Power Lifting"
      image={marcosPaulo.childImageSharp.fluid}
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

function OlympicLifting() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Olympic Lifting"
      image={marcosPaulo.childImageSharp.fluid}
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

function SportsMassage() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Sports Massage"
      image={marcosPaulo.childImageSharp.fluid}
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

function InfraredSauna() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Infrared Sauna"
      image={marcosPaulo.childImageSharp.fluid}
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

function MobilityLounge() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Mobility Lounge"
      image={marcosPaulo.childImageSharp.fluid}
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

export default ServicesPage;
