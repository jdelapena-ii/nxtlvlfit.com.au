import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

import { useGraphQL, useOnClickOutside } from '../../hooks';

function ServicesGrid() {
  const {
    svenMieke,
    kateBlush,
    allefVinicius,
    infraredSauna,
    sportsMassage,
  } = useGraphQL();
  return (
    <div className="grid bg-black md:grid-cols-2 lg:grid-cols-3">
      <Service
        label="Functional Fitness"
        slug="/services/functional-fitness/"
        image={svenMieke.childImageSharp.fluid}
      >
        <p>
          Discover your potential with nXtLvL’s functional training area.
          Improve strength, condition your body, learn new skills, challenge
          yourself, and have fun using the latest in functional training
          methodologies so you can smash your goals. We offer custom designed
          rigs and competition grade equipment to give you the edge in hitting
          your PRs and getting the most out of each Workout of the Day (WOD.)
        </p>
      </Service>
      <Service
        label="Calisthenics"
        slug="/services/calisthenics/"
        image={kateBlush.childImageSharp.fluid}
      >
        <p>
          nXtLvL is proud to offer a full calisthenics gym with its own
          dedicated mobility facility and class schedule. Incorporating movement
          with body weight exercises, calisthenics increases strength, fitness,
          and mobility for all ages and body types.
        </p>
        <p>
          nXtLvL calisthenics training ranges from group classes, personal
          training, and special seminars with expert calisthenics and fitness
          practitioners from around the region and Australia.
        </p>
      </Service>
      <Service
        label="Olympic Lifting & Power Lifting"
        slug="/services/olympic-and-power-lifting/"
        image={allefVinicius.childImageSharp.fluid}
      >
        <p>
          Get to the next level of lifting heavy at nXtLvL. Hit those gains with
          premier weightlifting, powerlifting, and plyometrics equipment,
          another dedicated part of our functional movement centre. Whether it’s
          for conditioning, hypertrophy, or attaining that one max rep, you’re
          always in control.
        </p>
        <p>
          Train on your own or with a group – take part in our rolling “Friday
          Night Lights” lifting competition for added support and social fun!
        </p>
      </Service>
      <Service
        label="Infrared Sauna"
        slug="/services/infrared-sauna/"
        image={infraredSauna.childImageSharp.fluid}
      >
        <p>
          nXtLvL has its own state-of-the-art infrared sauna for muscle recovery
          and Waon therapy. Waon therapy is linked with improve heart function,
          important for cardio training and heat conditioning. Use our infrared
          sauna for relaxation or as part of your training regimen. Infrared
          sauna or infrared therapy rooms are known as a “dry” sauna, using
          invisible light to create heat instead of traditional steam.
        </p>
      </Service>
      <Service
        label="Sports Massage"
        slug="/services/sports-massage/"
        image={sportsMassage.childImageSharp.fluid}
      >
        <p>
          Recovery is integral to maintaining peak physical performance. nXtLvL
          offers sports massage and muscle therapy from a qualified massage
          therapist to help you get moving after injury or improve mobility.
          Sports massage is part of nXtLvL’s dedicated mobility and recovery
          zone, focused on helping you ease back into full weight or cardio
          training. We encourage athletes and enthusiasts to use our facilities
          to support a comprehensive physiotherapy program.
        </p>
      </Service>
    </div>
  );
}

function Service({ children, image, label, slug }) {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // State to manage showing or hiding service information
  const [isOpen, setIsOpen] = useState(false);

  // Function to hide service information
  function handleClose() {
    setIsOpen(false);
  }

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, handleClose);

  return (
    <div className="relative h-0 aspect-ratio-square">
      {isOpen ? (
        <div ref={ref} className="absolute inset-0 flex p-2 bg-black">
          <div className="flex flex-col justify-between flex-1 px-4 py-12 overflow-hidden text-center border-2 border-white">
            <div className="relative overflow-y-scroll overscroll-contain">
              <h3 className="font-bold tracking-widest uppercase">{label}</h3>
              <div className="my-4 prose text-white">{children}</div>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-8 transform -translate-y-full bg-gradient-to-t from-black"
              />
              <Link
                aria-label={`Learn more about ${label}`}
                to={slug}
                className="inline-block px-8 py-2 mt-4 text-sm tracking-widest uppercase transition duration-150 ease-in-out border-2 border-white hover:bg-white hover:text-black"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex bg-black">
          <div className="absolute inset-0 flex">
            <GatsbyImage fluid={image} className="flex-1" />
          </div>
          <div className="relative flex items-center justify-center flex-1 p-4 bg-black bg-opacity-25">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-full px-8 py-4 font-bold text-center uppercase transition duration-300 ease-in-out border-2 border-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
            >
              {label}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Service.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export { ServicesGrid };
