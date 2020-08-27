import React from 'react';
import { Link } from 'gatsby';

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
      <Link
        to="/"
        className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
      >
        See classes
      </Link>
    </TeamMember>
  );
}

function Calisthenics() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Discover fluid movement with"
      heading="Calisthenics"
      image={marcosPaulo.childImageSharp.fluid}
      objectPosition="right"
    >
      <p>
        NXTLVL Functional Movement Centre is proud home to one of the region’s 
        premier calisthenics training facilities. 
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
      >
        More info
      </Link>
    </TeamMember>
  );
}

function PowerLifting() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Get those gains with"
      heading="OLYMPIC LIFTING and POWER LIFTING"
      image={marcosPaulo.childImageSharp.fluid}
      reverse
    >
      <p>
        Lift heavy with proper technique at NXTLVL Functional Movement Centre’s 
        dedicated Olympic and Power lifting area, using all the latest weightlifting, 
        powerlifting, and plyometrics equipment. 
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
      >
        More info
      </Link>
    </TeamMember>
  );
}


function SportsMassage() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Recover quicker with"
      heading="Sports Massage"
      image={marcosPaulo.childImageSharp.fluid}
    >
      <p>
        As part of our Functional Movement Centre, we understand how vital recovery 
        is to maintaining fitness and function. NXTLVL offers in-house sports massage 
        from qualified massage therapists to help you achieve more in the gym and in 
        everyday life.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
      >
        More info
      </Link>
    </TeamMember>
  );
}

function InfraredSauna() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      eyebrowText="Sweat it out in our"
      heading="INFRARED SAUNA"
      image={marcosPaulo.childImageSharp.fluid}
      reverse
    >
      <p>
      Our innovative infrared sauna is part of our recovery centre, helping 
      your muscles recover from high intensity workout, improve circulation, 
      and aid in relaxation. 
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-2 text-sm tracking-widest text-black uppercase transition duration-300 ease-in-out bg-white border-2 border-white hover:text-white hover:bg-transparent"
      >
        More info
      </Link>
    </TeamMember>
  );
}

function MobilityLounge() {
  const { marcosPaulo } = useGraphQL();
  return (
    <TeamMember
      heading="Mobility Lounge"
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

export default ServicesPage;
