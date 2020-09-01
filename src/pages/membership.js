import React from 'react';

import {
  Layout,
  SEO,
  PageHero,
  GradientContainer,
  TextWithImage,
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
        <MembershipFirstSection />
        <MembershipPackages />
      </GradientContainer>
      <Instagram />
      <Map />
    </Layout>
  );
}

function MembershipFirstSection() {
  return (
    <article className="relative w-full max-w-5xl mx-auto -mt-1/4">
      <div className="relative h-0 aspect-ratio-16/9">
        <div className="absolute inset-0 grid items-center gap-12 lg:grid-cols-2">
          <MembershipBenefits />
          <MembershipForm />
        </div>
      </div>
    </article>
  );
}

function MembershipBenefits() {
  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="prose">
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

function MembershipForm() {
  return (
    <div className="px-4 py-4 border-2 border-white sm:px-6 lg:px-8">
      <h2 className="font-bold text-center uppercase">Join the team</h2>
    </div>
  );
}

function MembershipPackages() {
  const { nxtlvlGrind } = useGraphQL();
  return (
    <TextWithImage
      eyebrowText="See our"
      heading="nXtLvL Memberships &amp; packages"
      image={nxtlvlGrind.childImageSharp.fluid}
      aspectRatio="aspect-ratio-3/4"
      reverse
    >
      <dl>
        <div>
          <dt>Gym Membership</dt>
          <dd>$50 per week (unlimited classes and open gym)</dd>
        </div>
      </dl>
    </TextWithImage>
  );
}

export default MembershipPage;
