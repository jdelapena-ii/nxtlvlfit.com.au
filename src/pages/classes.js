import React from 'react';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  Heading,
  TextWithImage,
  Instagram,
  ContactPageForm,
  Map,
} from '../components';
import { useGraphQL } from '../hooks';

function ClassesPage() {
  const { classes } = useGraphQL();

  return (
    <Layout>
      <SEO title="Classes" />
      <PageHero
        heading="nXtLvL Classes"
        image={classes.childImageSharp.fluid}
      />
      <GradientContainer>
        <div className="px-4 py-24 sm:px-6 lg:px-8">
          <Heading eyebrowText="Get ready to get">Energised!</Heading>
          <div className="relative grid max-w-5xl py-12 mx-auto mt-12 border-2 border-white gap-y-24">
            <NxtlvlFit />
            <NxtlvlBurn />
            <NxtlvlSkil />
            <NxtlvlCali />
            <NxtlvlLift />
            <NxtlvlEdge />
            <NxtlvlGrind />
            <NxtlvlKids />
            <NxtlvlTeens />
          </div>
        </div>
      </GradientContainer>
      <Instagram />
      <ContactPageForm />
      <Map />
    </Layout>
  );
}

function NxtlvlFit() {
  const { nxtlvlFit } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Fit"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlFit.childImageSharp.fluid}
      reverse
    >
      <p>
        nXtLvL’s very own high intensity, functional fitness class where you
        will be exposed to a vast variety of movements that will test and
        challenge your fitness, strength and skill and get you working towards
        your fitness and health goals. Rig, barbell, dumbbell, kettlebell,
        ropes, rings, body weight, sandbag, you name it, it’s there!
      </p>
    </TextWithImage>
  );
}

function NxtlvlBurn() {
  const { nxtlvlBurn } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Burn"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlBurn.childImageSharp.fluid}
    >
      <p>
        Designed with “get in, go hard and go home or back to the office”.
        nXtLvL BURN is the class that delivers big bang for buck in a short time
        frame. 5-10 minutes to warm up and 30 minutes of solid burn and 5
        minutes to cool down/recover so you can get back to your day.
      </p>
    </TextWithImage>
  );
}

function NxtlvlSkil() {
  const { nxtlvlSkil } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Skil"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlSkil.childImageSharp.fluid}
      objectPosition="left"
      reverse
    >
      <p>
        Monday’s at 5:30 is your nXtLvL opportunity to refine your gymnastic
        skills. Upside down, rig or rings we will have a focus and structure
        each week that will give you the opportunity to progress your skill set.
      </p>
    </TextWithImage>
  );
}

function NxtlvlCali() {
  const { nxtlvlCali } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Cali"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlCali.childImageSharp.fluid}
    >
      <p>
        Catering from the beginner through to advanced, nXtLvL Cali is Port’s
        first and only calisthenics training facility.Whether your goals are to
        improve your strength and flexibility, become a Ninja Warrior or build
        skills such as strict muscle up, handstand or planche we have the tools
        and highly skilled coaching to get you there.
      </p>
    </TextWithImage>
  );
}

function NxtlvlLift() {
  const { nxtlvlLift } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Lift"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlLift.childImageSharp.fluid}
      reverse
    >
      <p>
        nXtLvL is an Australian Weightlifting Federation (AWF) registered
        training facility. With three Australian Weightlifting Federation
        qualified coaches to teach/refine your Olympic Lifting skillset. nXtLvL
        LIFT will focus on a single lift each week, breaking The movement down
        and teaching you the correct/safe way to lift. nXtLvL EDGE – Designed to
        give you the edge on your training and lifts including but not limited
        to power based lifts – deadlifts, bench press, all forms of squat and
        more.
      </p>
    </TextWithImage>
  );
}

function NxtlvlEdge() {
  const { nxtlvlEdge } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Edge"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlEdge.childImageSharp.fluid}
      objectPosition="left"
    >
      <p>
        will also be a place where corrective exercises and techniques will be
        utilised to help you understand how your body works and what exercises
        you can do to help you advance your strength and skill levels across the
        board. Finishing with a WOD, it is a class with a comprehensive and
        complete approach.
      </p>
    </TextWithImage>
  );
}

function NxtlvlGrind() {
  const { nxtlvlGrind } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Grind"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlGrind.childImageSharp.fluid}
      reverse
    >
      <p>
        the name says it all. nXtLvL’s class where you will be given 60-90
        minutes of pure cardio grind!! Testing every aspect your mental and
        physical endurance and building that aerobic foundation in your
        training. This class won’t be about the technical or the heavy but about
        digging deep and discovering what you’re made of and so much fun along
        the way.
      </p>
    </TextWithImage>
  );
}

function NxtlvlKids() {
  const { nxtlvlKids } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Kids"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlKids.childImageSharp.fluid}
    >
      <p>
        45 mins of fun and fitness for primary aged kids. Kids will increase
        their fitness, learn functional fitness skills and build strength in a
        safe and structured environment.
      </p>
    </TextWithImage>
  );
}

function NxtlvlTeens() {
  const { nxtlvlTeens } = useGraphQL();
  return (
    <TextWithImage
      heading="nXtLvL Teens"
      ctaLink="/timetable/"
      ctaLabel="See our timetable"
      image={nxtlvlTeens.childImageSharp.fluid}
      reverse
    >
      <p>
        Similar in structure to our nXtLvL FIT class but designed with TEENS in
        mind – challenging and developing skills and strength safely in
        functional fitness way that sets them up for life. A place to train with
        mates and make new ones while having a lot of fun. While teens will be
        welcome in other classes this class is all about them.
      </p>
    </TextWithImage>
  );
}

export default ClassesPage;
