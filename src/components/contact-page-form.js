import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactForm, Input, TextArea } from './form-elements';
import { socialLinks } from '../data';
import { useGraphQL } from '../hooks';
import { GradientContainer } from './gradient-container';

function ContactPageForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    site: { siteMetadata },
  } = useGraphQL();

  return (
    <GradientContainer>
      <article className="relative px-4 pt-24 pb-12 sm:px-6 lg:px-8 sm:pt-40">
        <div className="relative w-full max-w-5xl px-4 py-12 mx-auto bg-black bg-opacity-50 border-4 border-white lg:my-12 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-insane">
              Contact Us
            </h2>
            <div className="mx-auto prose text-white">
              <p>
                Talk to our Centre Directors Rich or Kez for bookings, sign-ups,
                or enquiries. <br />
                Send us a message outside of business hours below.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <ContactForm
              handleSubmit={handleSubmit}
              register={register}
              setIsSubmitting={setIsSubmitting}
              action="/success/"
              name="contact_form"
              className="grid grid-cols-1 gap-24 md:grid-cols-7"
            >
              <div className="hidden mt-4 md:block md:col-span-3">
                <dl className="space-y-4">
                  <div>
                    <div className="tracking-widest">
                      <dt className="inline">Rich </dt>
                      <dd className="inline font-bold">
                        <a href={`tel:${siteMetadata.phone.rich}`}>
                          {siteMetadata.phone.rich}
                        </a>
                      </dd>
                    </div>
                    <div className="tracking-widest">
                      <dt className="inline">Kez </dt>
                      <dd className="inline font-bold">
                        <a href={`tel:${siteMetadata.phone.kez}`}>
                          {siteMetadata.phone.kez}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="tracking-widest">
                    <dt className="inline">Address: </dt>
                    <dd className="inline font-bold">
                      {siteMetadata.address.street} <br />
                      {siteMetadata.address.suburb},{' '}
                      {siteMetadata.address.state}
                    </dd>
                  </div>
                  <div className="tracking-widest">
                    <dt className="inline">Email: </dt>
                    <dd className="inline font-bold">
                      <a href={`mailto:${siteMetadata.email}`}>
                        {siteMetadata.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="mt-16 tracking-widest">
                  <strong>Follow us on</strong>
                </p>
                <ul className="flex mt-2 space-x-2 text-xl tracking-widest uppercase">
                  {socialLinks.map((link) => (
                    <li key={link.id} className="flex">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-1 rounded-full"
                      >
                        <span className="sr-only">{link.label}</span>
                        <link.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1 space-y-6 md:col-span-4">
                <Input
                  name="full_name"
                  label="Full name"
                  register={register}
                  errors={errors}
                />
                <Input
                  name="contact_number"
                  label="Phone number"
                  type="tel"
                  register={register}
                  errors={errors}
                />
                <Input
                  name="email_address"
                  label="Email address"
                  type="email"
                  register={register}
                  errors={errors}
                />
                <TextArea
                  name="message"
                  label="Message"
                  register={register}
                  errors={errors}
                />
                <div className="flex justify-end space-y-6 sm:space-x-4 sm:space-y-0">
                  <span className="inline-flex shadow-sm">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest uppercase transition duration-300 ease-in-out border border-white rounded-none hover:bg-white hover:text-black focus:bg-white focus:text-black"
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </div>
            </ContactForm>
          </div>
        </div>
      </article>
    </GradientContainer>
  );
}

export { ContactPageForm };
