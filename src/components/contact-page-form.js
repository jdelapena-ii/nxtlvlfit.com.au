import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactForm, Input, TextArea } from './form-elements';
import { socialLinks } from '../data';
import { useGraphQL } from '../hooks';

function ContactPageForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const {
    site: { siteMetadata },
  } = useGraphQL();

  return (
    <article className="relative px-4 mx-4 mt-24 md:mx-auto sm:mt-40">
      <div className="relative w-full px-4 py-12 mx-auto bg-black bg-opacity-50 border-4 border-white max-w-7xl lg:my-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            style={{ letterSpacing: '0.7rem' }}
            className="text-2xl font-bold uppercase"
          >
            Contact Us
          </h2>
        </div>
        <div className="mt-12">
          <ContactForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            setMessage={setMessage}
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
                    {siteMetadata.address.suburb}, {siteMetadata.address.state}
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
              <ul className="flex mt-2 space-x-4 text-xl tracking-widest uppercase">
                {socialLinks.map((link) => (
                  <li key={link.id} className="flex">
                    <a href={link.url} className="inline-block rounded-full">
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
                label="Contact number"
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
                    className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest uppercase border border-white rounded-none focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </span>
              </div>
              {message && (
                <p
                  dangerouslySetInnerHTML={{ __html: message }}
                  className="mt-6 prose text-center"
                />
              )}
            </div>
          </ContactForm>
        </div>
      </div>
    </article>
  );
}

export { ContactPageForm };
