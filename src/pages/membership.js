import React from 'react';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  MembershipForm,
  TextWithImage,
  StartFreeTrial,
  Instagram,
  Map,
} from '../components';
import { useGraphQL } from '../hooks';

function MembershipPage() {
  const { membership } = useGraphQL();

  return (
    <Layout>
      <SEO title="Membership" />
      <PageHero image={membership.childImageSharp.fluid} />
      <GradientContainer>
        <div className="grid gap-24">
          <MembershipFirstSection />
          <MembershipPackages />
          <StartFreeTrial />
        </div>
      </GradientContainer>
      <Instagram />
      <Map />
    </Layout>
  );
}

function MembershipFirstSection() {
  return (
    <article className="relative grid items-center w-full max-w-5xl mx-auto -mt-1/2 lg:grid-cols-2">
      <MembershipBenefits />
      <MembershipForm />
    </article>
  );
}

function MembershipBenefits() {
  return (
    <div className="flex items-center flex-1 px-4 py-4 sm:px-6 lg:px-8">
      <div className="prose text-white text-shadow">
        <h2 className="text-lg font-bold uppercase">
          The First 50 people to sign up as members of nXtLvL will receive the
          following:
        </h2>
        <ul>
          <li>1x free PT session (30 mins)</li>
          <li>1x free sauna session (option to bring a friend)</li>
          <li>1x 50% off sauna session</li>
          <li>nXtLvL Mobility Ball</li>
          <li>Voucher for 20% off merchandise</li>
          <li>nXtLvL Stickers</li>
          <li>1x 50% off half hour massage</li>
          <li>nXtLvL Trucker Cap</li>
          <li>nXtLvL Protein Shaker</li>
        </ul>
      </div>
    </div>
  );
}

function MembershipPackages() {
  const { nxtlvlGrind } = useGraphQL();
  return (
    <TextWithImage
      eyebrowText="See our"
      heading="nXtLvL Memberships &amp; packages"
      ctaLabel="Join now"
      ctaLink="/membership/#membership-form"
      image={nxtlvlGrind.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <dl>
        <div>
          <dt className="inline font-bold uppercase">Gym Membership </dt>
          <dd className="inline">
            $50 per week (unlimited classes and open gym)
          </dd>
        </div>
        <div>
          <dt className="inline font-bold uppercase">10 Visit Gym Pass </dt>
          <dd className="inline">$200</dd>
        </div>
        <div>
          <dt className="inline font-bold uppercase">Gym Drop Ins </dt>
          <dd className="inline">$25 per class</dd>
        </div>
        <div>
          <dt className="inline font-bold uppercase">Kids </dt>
          <dd className="inline">$10 per class</dd>
        </div>
        <div>
          <dt className="inline font-bold uppercase">Teens </dt>
          <dd className="inline">
            $15 per class for <span className="uppercase">teen</span> specific
            classes
          </dd>
        </div>
        <div>
          <dt className="inline font-bold uppercase">Sauna Membership </dt>
          <dd className="inline">$35 a week (unlimited sauna use)</dd>
        </div>
      </dl>
      <h4 className="font-bold uppercase">
        Casual sauna visits are as follows:
      </h4>
      <ul>
        <li>1 person $30</li>
        <li>1 person $35</li>
        <li>1 person $40</li>
        <li>1 person $45</li>
        <li>1 person $50</li>
      </ul>
      <dl>
        <div>
          <dt className="inline font-bold uppercase">
            Combined Unlimted Gym &amp; Sauna{' '}
          </dt>
          <dd className="inline">$75 per week</dd>
        </div>
        <div>
          <dt className="font-bold uppercase">Personal training and massage</dt>
          <dd>1 hour = $80</dd>
          <dd>&frac12; hour = $50</dd>
        </div>
      </dl>
    </TextWithImage>
  );
}

export default MembershipPage;
